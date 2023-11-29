import React from "react"
import Header from "./Header.js"
import Body from "./Body.js"
import Window from "./Window"
import Footer from "./Footer.js"
import {useState} from 'react'
import {createContext} from 'react'
import './App.css';


export const ThemeContext = createContext(null);
export const ProjectContext = createContext(null);

export default function App() {
    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);
    let [position, setPosition] = useState("relative");
    let [theme, setTheme] = useState("dark");
    let [selectedProject, setSelectedProject] = useState(1);

    function toggleTheme(){
        setTheme((curr)=>(curr==="light" ? "dark" : "light"));
    }

    return (
        <ProjectContext.Provider value={{selectedProject, setSelectedProject}}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="mainWidonwContainer" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`}}>
                <div className="leftResizer"></div>
                <div className="verticalWindowContainer">
                    <div className="topResizer"></div>
                    <div className={`mainWindow ${(theme)}`} id="mainWindow" >
                        <Header updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <Body />
                        <Footer />
                    </div>
                    <div className="bottomResizer"></div>
                </div>
                <div className="rightResizer"></div>
            </div>
            <Window theme={theme} selectedProject={selectedProject}/>
        </ThemeContext.Provider>
        </ProjectContext.Provider>
    )
}
