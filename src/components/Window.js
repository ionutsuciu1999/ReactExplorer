import React from "react"
import HeaderWindow from "./HeaderWindow.js"
import BodyWindow from "./BodyWindow.js"
import Footer from "./Footer.js"
import {useState} from 'react'
import {ProjectContext} from './App.js'
import './App.css';
import {useEffect} from 'react';

export default function Window(props) {
    const {theme, selectedProject, resizeMouseDown, dragMouseDown} = props;
   

    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);

    
    useEffect(()=>{
        setLeft((document.getElementById("root").offsetWidth - (document.getElementById("projectWindow").offsetWidth))/2);
        setTop((window.innerHeight - (document.getElementById("projectWindow").offsetHeight))/2);
        document.getElementById("projectWindow").style.zIndex="1000"; 
    }, []);

        
        return (
        <ProjectContext.Consumer>
        {projectSwitch => (
            <div className="mainWidonwContainer" id="projectWindow" style={{ left: `${leftVal}px`,  top: `${topVal}px`,  width: `${projectSwitch.windowProjectWidth}px`}}>
                <div className="leftResizer" onMouseDown={(e)=>resizeMouseDown(e,"left",setLeft,projectSwitch.windowProjectWidth,projectSwitch.setWindowProjectWidth,leftVal)}></div>
                <div className="verticalWindowContainer">
                    <div className="topResizer" onMouseDown={(e)=>resizeMouseDown(e,"top",setTop,projectSwitch.windowProjectHeight,projectSwitch.setWindowProjectHeight,topVal)}></div>
                    <div className={`mainWindow ${(theme)}`}>
                        <HeaderWindow dragMouseDown={dragMouseDown} updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} setWindowDisplay={projectSwitch.setWindowDisplay}/>
                            <BodyWindow selectedProject={selectedProject} height={projectSwitch.windowProjectHeight} />
                        <Footer />
                    </div>
                    <div className="bottomResizer" onMouseDown={(e)=>resizeMouseDown(e,"bottom",setTop,projectSwitch.windowProjectHeight,projectSwitch.setWindowProjectHeight,topVal)}></div>
                </div>
                <div className="rightResizer" onMouseDown={(e)=>resizeMouseDown(e,"right",setLeft,projectSwitch.windowProjectWidth,projectSwitch.setWindowProjectWidth,leftVal)}></div>
            </div>
        )}
    </ProjectContext.Consumer>
    )
   
}
