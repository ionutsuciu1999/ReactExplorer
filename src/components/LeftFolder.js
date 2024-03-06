import React from "react"
import {ProjectContext} from './App.js'


export default function LeftFolder(props) {
  
    
    return(
        /**"menuContainer $ */
        <ProjectContext.Consumer>
        {projectSwitch => (
            <div className={projectSwitch.indexSelected==Number(props.item.id)?"highlighted":"notHighlighted"} onClick={()=>{projectSwitch.setFolder(props.item.searchType); projectSwitch.setIndexSelected(Number(props.item.id));}}>
                <div className="fillerContainer">
                </div>
                <div className="fillerContent">
                    <img className="menuImage" src={`../icons/${props.item.url}`} />
                    <span className="menuName">{props.item.name}</span>
                </div>
            </div>
        )}
        </ProjectContext.Consumer>
    )
}