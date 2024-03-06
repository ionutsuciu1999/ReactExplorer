import React, { useContext } from "react"
import LeftFolder from "./LeftFolder.js"
import RightFolder from "./RightFolder.js"
import './Body.css';
import projectsData from "../projectsData.js"
import {useState} from 'react'
import ReactSwitch from 'react-switch'
import {ProjectContext} from './App.js'


export default function Body(props) {


    const selectedFolder = useContext(ProjectContext);

    const elementsMenu = projectsData.data.menu.map(item => {
        return (
            <LeftFolder
                key={item.id}
                item={item}
            />
        )
    });
  
    const elementsProjects = projectsData.data.projects.map(item => {
        if(item.type==selectedFolder["folder"]){
            return (
                <RightFolder
                    key={item.id}
                    item={item}
                />
            )
        }
    });

    
    return (
        <ProjectContext.Consumer>
            {projectSwitch => (
            <div className="bodyBody" style={{ height: `${props.height}px`}}>
                <div className="leftSide">
                    {elementsMenu}
                    <div id="switchFlex">
                        <div>
                            <ReactSwitch onChange={projectSwitch.toggleTheme} checked={projectSwitch.theme==="light"}/>
                            <span>{projectSwitch.theme=="light"?"Dark Mode":"Light Mode"}</span>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    {elementsProjects}
                </div>
            </div>
            )}
        </ProjectContext.Consumer>
    )
}