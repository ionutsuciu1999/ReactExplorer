import React from "react"
import LeftFolder from "./LeftFolder.js"
import RightFolder from "./RightFolder.js"
import './Body.css';
import projectsData from "../projectsData.js"
import {useState} from 'react'
import ReactSwitch from 'react-switch'
import {ThemeContext} from './App.js'


export default function Body(props) {
    let [folder, setFolder] = useState("code");
    let [indexSelected, setIndexSelected] = useState(1);
    const elementsMenu = projectsData.data.menu.map(item => {
        return (
            <LeftFolder
                key={item.id}
                item={item}
                setFolder={setFolder}
                indexSelected={indexSelected}
                setIndexSelected={setIndexSelected}
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
        <ThemeContext.Consumer>
            {themeSwitch => (
            <div className="bodyBody" style={{ height: `${props.height}px`}}>
                <div className="leftSide">
                    {elementsMenu}
                    <div id="switchFlex">
                        <div>
                            <ReactSwitch onChange={themeSwitch.toggleTheme} checked={themeSwitch.theme==="light"}/>
                            <span>{themeSwitch.theme=="light"?"Dark Mode":"Light Mode"}</span>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    {elementsProjects}
                </div>
            </div>
            )}
        </ThemeContext.Consumer>
    )
}