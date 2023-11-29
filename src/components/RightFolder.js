import React from "react"
import {ProjectContext} from './App.js'

export default function RightFolder(props) {
  
   return(
    <ProjectContext.Consumer>
        {projectSwitch => (
            <div className="projectContainer" onClick={()=>projectSwitch.setSelectedProject(props.item.id)}>
                <img src={`../projects/${props.item.name}/icon.png`} />
                <span>{props.item.name}</span>
            </div>
        )}
    </ProjectContext.Consumer>
   )
}