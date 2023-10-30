import React from "react"
import LeftFolder from "./LeftFolder.js"
import RightFolder from "./RightFolder.js"
import './Body.css';
import projectsData from "../projectsData.js"
import {useState} from 'react'


export default function Body() {
    let [folder, setFolder] = useState("code");

    const elementsMenu = projectsData.data.menu.map(item => {
        return (
            <LeftFolder
                key={item.id}
                item={item}
                setFolder={setFolder}
            />
        )
    });
    
    const elementsProjects = projectsData.data.projects.map(item => {
        if(item.type==folder){
            return (
                <RightFolder
                    key={item.id}
                    item={item}
                />
            )
        }
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