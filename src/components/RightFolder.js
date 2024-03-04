import React from "react"
import {ProjectContext} from './App.js'

export default function RightFolder(props) {
    
    //mostra la finestra al click e mettila di front alla finestra principale
   return(
    <ProjectContext.Consumer>
        {projectSwitch => (
            <div className="projectContainer" onClick={()=>{
                                   projectSwitch.setSelectedProject(props.item.id); 
                                   document.getElementById("projectWindow").style.display = ""; 
                                   document.getElementById("projectWindow").style.zIndex="1000"; 
                                   
                                    console.log("put window project window at center on load");
                                }}>
                <img src={`../projects/${props.item.name}/icon.png`} />
                <span>{props.item.name}</span>
            </div>
        )}
    </ProjectContext.Consumer>
   )
}