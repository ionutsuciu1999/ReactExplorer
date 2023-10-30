import React from "react"
import LeftFolder from "./LeftFolder.js"
import RightFolder from "./RightFolder.js"
import './Body.css';
import projectsData from "../projectsData.js"


export default function Body() {
    const elementsMenu = projectsData.data.menu.map(item => {
        return (
            <LeftFolder
                key={item.id}
                item={item}
            />
        )
    });
    
    const elementsProjects = projectsData.data.projects.map(item => {
        return (
            <RightFolder
                key={item.id}
                item={item}
            />
        )
    });  

    return (
        <div className="bodyBody">
            <div className="leftSide">
                {elementsMenu}
            </div>
            <div className="rightSide">
                {elementsProjects}
            </div>
        </div>
    )
}