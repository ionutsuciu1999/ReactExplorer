import React from "react"
import HeaderWindow from "./HeaderWindow.js"
import BodyWindow from "./BodyWindow.js"
import Footer from "./Footer.js"
import {useState} from 'react'
import {ProjectContext} from './App.js'
import {createContext} from 'react'
import './App.css';
import {useEffect} from 'react';

export default function Window(props) {
    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);
    let [position, setPosition] = useState("absolute");

    console.log("left val parent= "+leftVal);
    //doing this avoids lifting state up
    
    useEffect(()=>{
        
        setLeft((document.getElementById("root").innerWidth - (document.getElementById("projectWindow").offsetWidth))/2);
        setTop((window.innerHeight - (document.getElementById("projectWindow").offsetHeight))/2);
    }, [props.selectedProject]);

        
        return (
        <ProjectContext.Consumer>
        {projectSwitch => (
            <div className="mainWidonwContainer" id="projectWindow" style={{ left: `${leftVal}px`,  top: `${topVal}px`,  width: `${projectSwitch.windowProjectWidth}px`, position: `${position}`, display:`none`}}>
                <div className="leftResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"left",setLeft,projectSwitch.windowProjectWidth,projectSwitch.setWindowProjectWidth,leftVal)}></div>
                <div className="verticalWindowContainer">
                    <div className="topResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"top",setTop,projectSwitch.windowProjectHeight,projectSwitch.setWindowProjectHeight,topVal)}></div>
                    <div className={`mainWindow ${(props.theme)}`}>
                        <HeaderWindow dragMouseDown={props.dragMouseDown} updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                            <BodyWindow selectedProject={props.selectedProject} height={projectSwitch.windowProjectHeight} setWindowWidth={projectSwitch.setWindowProjectWidth}/>
                        <Footer />
                    </div>
                    <div className="bottomResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"bottom",setTop,projectSwitch.windowProjectHeight,projectSwitch.setWindowProjectHeight,topVal)}></div>
                </div>
                <div className="rightResizer" onMouseDown={(e)=>props.resizeMouseDown(e,"right",setLeft,projectSwitch.windowProjectWidth,projectSwitch.setWindowProjectWidth,leftVal)}></div>
            </div>
        )}
    </ProjectContext.Consumer>
    )
   
}
