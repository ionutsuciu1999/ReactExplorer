import React from "react"
import HeaderWindow from "./HeaderWindow.js"
import BodyWindow from "./BodyWindow.js"
import Footer from "./Footer.js"
import {useState} from 'react'
import {createContext} from 'react'
import './App.css';


export const ThemeContext = createContext(null);
export default function Window(props) {
    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);
    let [position, setPosition] = useState("relative");

    return (
        <div className="mainWidonwContainer" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`}}>
            <div className="leftResizer"></div>
            <div className="verticalWindowContainer">
                <div className="topResizer"></div>
                <div className={`mainWindow ${(props.theme)}`}>
                    <HeaderWindow updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <BodyWindow selectedProject={props.selectedProject}/>
                    <Footer />
                </div>
                <div className="bottomResizer"></div>
            </div>
            <div className="rightResizer"></div>
        </div>
    )
}
