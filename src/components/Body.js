import React from "react"
import LeftFolder from "./LeftFolder.js"
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
    })  

console.log(projectsData);
    return (
        <div className="bodyBody">
            <div className="leftSide">
                {elementsMenu}
            </div>
            <div className="rightSide">

            </div>
        </div>
    )
}