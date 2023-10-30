import React from "react"
import './LeftFolder.css';


export default function LeftFolder(props) {
   
    let highlighted = "";
    if(props.indexSelected==Number(props.item.id)){
        highlighted = "highlighted";
    }else{
        highlighted = "notHighlighted";
    }

    function setFolderType(){
        props.setFolder(props.item.searchType);
        props.setIndexSelected(Number(props.item.id));
    }
    return(
        /**"menuContainer $ */
        <div className={highlighted} onClick={setFolderType}>
            <div className="fillerContainer">
            </div>
            <div className="fillerContent">
                <img className="menuImage" src={`../icons/${props.item.url}`} />
                <span className="menuName">{props.item.name}</span>
            </div>
        </div>
    )
}