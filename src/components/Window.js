import React from "react"
import HeaderWindow from "./HeaderWindow.js"
import BodyWindow from "./BodyWindow.js"
import Footer from "./Footer.js"
import {useState} from 'react'
import {createContext} from 'react'
import './App.css';
import {useEffect} from 'react';

export default function Window(props) {
    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);
    let [position, setPosition] = useState("absolute");
    let [windowHeight, setWindowHeight] = useState(380);
    let [windowWidth, setWindowWidth] = useState();

    //doing this avoids lifting state up
    useEffect(()=>{
        setLeft((window.innerWidth - (document.getElementById("projectWindow").offsetWidth))/2);
        setTop((window.innerHeight - (document.getElementById("projectWindow").offsetHeight))/2);
        console.log("put project window at center on load");
    }, [props.selectedProject]);

    return (
        <div className="mainWidonwContainer" id="projectWindow" style={{ left: `${leftVal}px`,  top: `${topVal}px`,  width: `${windowWidth}px`, position: `${position}`, display:`none`}}>
            <div className="leftResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"left",setLeft,windowWidth,setWindowWidth,leftVal)}></div>
            <div className="verticalWindowContainer">
                <div className="topResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"top",setTop,windowHeight,setWindowHeight,topVal)}></div>
                <div className={`mainWindow ${(props.theme)}`}>
                    <HeaderWindow dragMouseDown={props.dragMouseDown} updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <BodyWindow selectedProject={props.selectedProject} height={windowHeight}/>
                    <Footer />
                </div>
                <div className="bottomResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"bottom",setTop,windowHeight,setWindowHeight,topVal)}></div>
            </div>
            <div className="rightResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"right",setLeft,windowWidth,setWindowWidth,leftVal)}></div>
        </div>
    )
}
