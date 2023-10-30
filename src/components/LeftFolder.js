import React from "react"
import './LeftFolder.css';


export default function LeftFolder(props) {
    console.log(props);
   return(
        <div className="menuContainer" onClick={props.setFolder(props.item.searchType)}>
            <div className="fillerContainer">
            </div>
            <div className="fillerContent">
                <img className="menuImage" src={`../icons/${props.item.url}`} />
                <span className="menuName">{props.item.name}</span>
            </div>
        </div>
    )
}