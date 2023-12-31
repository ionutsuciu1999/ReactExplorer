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
    let [position, setPosition] = useState("absolute");
    let [windowHeight, setWindowHeight] = useState(300);
    let [windowWidth, setWindowWidth] = useState(600);

    return (
        <div className="mainWidonwContainer" id="projectWindow" style={{ left: `${leftVal}px`,  top: `${topVal}px`,  width: `${windowWidth}px`, position: `${position}`, display:`none`}}>
            <div className="leftResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"left",setLeft,setWindowWidth)}></div>
            <div className="verticalWindowContainer">
                <div className="topResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"top",setTop,setWindowHeight)}></div>
                <div className={`mainWindow ${(props.theme)}`}>
                    <HeaderWindow updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <BodyWindow selectedProject={props.selectedProject} height={windowHeight}/>
                    <Footer />
                </div>
                <div className="bottomResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"bottom",setTop,setWindowHeight)}></div>
            </div>
            <div className="rightResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"right",setLeft,setWindowWidth)}></div>
        </div>
    )
}
