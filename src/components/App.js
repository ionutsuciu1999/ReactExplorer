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
    let [position, setPosition] = useState("absolute");
    let [theme, setTheme] = useState("dark");
    let [selectedProject, setSelectedProject] = useState(1);

    function toggleTheme(){
        setTheme((curr)=>(curr==="light" ? "dark" : "light"));
    }

    let [windowHeight, setWindowHeight] = useState(400);
    let [windowWidth, setWindowWidth] = useState(800);
    var pos1=0, pos2=0,pos3=0,pos4=0,finalHeight = 0, finalWidth = 0, windowVerticalMove = 0, windowHorizontalMove = 0,  minWidth = 400, minHeight = 230;
    
    //put window at the center
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Hello World!");
    });


    //click zindex function
    for (var i = 0; i < document.getElementsByClassName("mainWidonwContainer").length; i++) {
        document.getElementsByClassName("mainWidonwContainer")[i].addEventListener("mousedown",function(e){
            for (var i = 0; i < document.getElementsByClassName("mainWidonwContainer").length; i++) {
                document.getElementsByClassName("mainWidonwContainer")[i].style.zIndex = "10";
            }
            e.target.closest(".mainWidonwContainer").style.zIndex="1000";
        },false);
    }


    //resize function
    const resizeMouseDown = (e,direction,setDir,oldWindowSize,setWind,oldWindowPosition) => {
        console.log("ok grago");
        
        e.preventDefault();
        //initial click position
        pos3 = e.clientX;
        pos4 = e.clientY;

        var handlerAAA = function(e) {resizeCloseDragElement()}
        var handlerBBB = function(e) {resizeElementDrag(e,direction,setDir,oldWindowSize,setWind,oldWindowPosition)}
        document.addEventListener("mouseup",handlerAAA,false);
        document.addEventListener("mousemove",handlerBBB,false);

        const resizeElementDrag = (e,resizeDirection,setDir,oldWindowSize,setWind,oldWindowPosition) =>{
            e.preventDefault();
            
            //when dragging calculare new size relatively to initial click position
            if(resizeDirection=="top"){
                pos2 = pos4 - e.clientY;
                finalHeight = oldWindowSize + pos2;
                windowVerticalMove = oldWindowPosition-pos2;
                if(finalHeight>minHeight){
                    setDir(windowVerticalMove);
                    setWind(finalHeight);
                }else{
                    setWind(minHeight);
                    setDir(windowVerticalMove);
                }
            }else if(resizeDirection=="bottom"){
                pos2 = pos4 - e.clientY;
                finalHeight = oldWindowSize - (pos2);
                windowVerticalMove = oldWindowPosition;
                if(finalHeight>minHeight){
                    setDir(windowVerticalMove);
                    setWind(finalHeight);
                }else{
                    setWind(minHeight);
                    setDir(windowVerticalMove);
                }
            }else if(resizeDirection=="left"){
                
                pos1 = pos3 - e.clientX;
                finalWidth = oldWindowSize + pos1;
                windowHorizontalMove = oldWindowPosition-pos1;
                console.log("finalWidth:"+finalWidth)
                if(finalWidth>minWidth){
                    setDir(windowHorizontalMove);
                    setWind(finalWidth);
                }else{
                    setDir(windowHorizontalMove);
                    setWind(minWidth);
                }
            }else if(resizeDirection=="right"){
                pos1 = pos3 - e.clientX;
                finalWidth = oldWindowSize - (pos1);
                windowHorizontalMove = oldWindowPosition;
                if(finalWidth>minWidth){
                    setDir(windowHorizontalMove);
                    setWind(finalWidth);
                }else{
                    setDir(windowHorizontalMove);
                    setWind(minWidth);
                }
            }
            
            console.log("....");
        }
        const resizeCloseDragElement = () =>{
            /* stop moving when mouse button is released:*/
            console.log("FINEE");
            document.removeEventListener("mouseup",handlerAAA);
            document.removeEventListener("mousemove",handlerBBB);
        }
    }
    
    //drag function
    const dragMouseDown = (e,updateTop,updateLeft,topValue,leftValue,currentPosition,updatePosition) => {
        if(currentPosition=="relative"){
            updatePosition("relative");

        }
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        var handlerDDD = function(e) {elementDrag(e)}
        var handlerCCC = function(e) {closeDragElement()}
        document.addEventListener("mouseup",handlerCCC,false);
        document.addEventListener("mousemove",handlerDDD,false);
        
        function elementDrag(e) {
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            // set the element's new position:
            updateTop(topValue - pos2);
            updateLeft(leftValue - pos1);
        }
        function closeDragElement() {
            /* stop moving when mouse button is released:*/
            console.log("STOP");
            document.removeEventListener("mouseup",handlerCCC);
            document.removeEventListener("mousemove",handlerDDD);
        }
    }
    
    
    return (
        <ProjectContext.Provider value={{selectedProject, setSelectedProject}}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="mainWidonwContainer" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`, width: `${windowWidth}px`}}>
                <div className="leftResizer" onMouseDown={(e)=>resizeMouseDown(e,"left",setLeft,windowWidth,setWindowWidth,leftVal)}></div>
                <div className="verticalWindowContainer" >
                    <div className="topResizer" onMouseDown={(e)=>resizeMouseDown(e,"top",setTop,windowHeight,setWindowHeight,topVal)}></div>
                    <div className={`mainWindow ${(theme)}`} id="mainWindow" >
                        <Header dragMouseDown={dragMouseDown} updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <Body height={windowHeight} width={windowWidth}/>
                        <Footer/>
                    </div>
                    <div className="bottomResizer" onMouseDown={(e)=>resizeMouseDown(e,"bottom",setTop,windowHeight,setWindowHeight,topVal)}></div>
                </div>
                <div className="rightResizer" onMouseDown={(e)=>resizeMouseDown(e,"right",setLeft,windowWidth,setWindowWidth,leftVal)}></div>
            </div>

            <Window theme={theme} selectedProject={selectedProject} resizeMouseDown={resizeMouseDown} dragMouseDown={dragMouseDown}/>
            
        </ThemeContext.Provider>
        </ProjectContext.Provider>
    )
}
