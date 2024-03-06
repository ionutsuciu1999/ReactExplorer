import React from "react"
import Header from "./Header.js"
import Body from "./Body.js"
import Window from "./Window"
import Footer from "./Footer.js"

import WindowFooter from "./AppFooter"
import WindowHeader from "./AppHeader"
import {useState} from 'react'
import {createContext} from 'react'
import {useEffect} from 'react';

import './App.css';

export const ProjectContext = createContext(null);

export default function App() {
    let [indexSelected, setIndexSelected] = useState(1);
    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);
    let [theme, setTheme] = useState("dark");
    let [selectedProject, setSelectedProject] = useState(1);
    let [windowDisplay, setWindowDisplay] = useState(0);
    let [folder, setFolder] = useState("code");
    function toggleTheme(){
        setTheme((curr)=>(curr==="light" ? "dark" : "light"));
    }
    let [windowProjectHeight, setWindowProjectHeight] = useState(380);
    let [windowProjectWidth, setWindowProjectWidth] = useState();
    let [windowHeight, setWindowHeight] = useState(400);
    let [windowWidth, setWindowWidth] = useState();
    var pos1=0, pos2=0,pos3=0,pos4=0,finalHeight = 0, finalWidth = 0, windowVerticalMove = 0, windowHorizontalMove = 0,  minWidth = 400, minHeight = 230, maxWidth = 825;

    //put windows at the center on load and resize it
    useEffect(()=>{
        let portfolioWindow = document.getElementById("mainPortfolioWindow");
        let pageHeader = document.getElementById("windowHeader");
        let pageFooter = document.getElementById("windowFooter");
        
        let newHeight = 0;
        console.log("spaz disp: "+((window.innerHeight - pageHeader.offsetHeight) - pageFooter.offsetHeight));
        if(portfolioWindow.offsetHeight > ((window.innerHeight - pageHeader.offsetHeight) - pageFooter.offsetHeight)){
            newHeight = (window.innerHeight - (pageFooter.offsetHeight + pageHeader.offsetHeight) - portfolioWindow.offsetHeight);
            setWindowHeight(windowHeight + newHeight);
        }
        setLeft((window.innerWidth - (portfolioWindow.offsetWidth))/2);
        setTop(((window.innerHeight - newHeight) - (portfolioWindow.offsetHeight))/2);
        setWindowWidth(document.getElementById("mainWindow").offsetWidth);
        console.log("put window project window at center on load");
    }, []);


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
                    if(finalWidth<maxWidth){
                        setDir(windowHorizontalMove);
                        setWind(finalWidth);
                    }
                }else{
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
            document.removeEventListener("mouseup",handlerAAA);
            document.removeEventListener("mousemove",handlerBBB);
        }
    }
    
    //drag function
    const dragMouseDown = (e,updateTop,updateLeft,topValue,leftValue) => {
       
        
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
        <ProjectContext.Provider value={{selectedProject, setSelectedProject,windowProjectHeight,windowProjectWidth,setWindowProjectWidth,setWindowProjectHeight,setWindowDisplay,theme,toggleTheme,folder,setFolder,indexSelected,setIndexSelected}}>
            <WindowHeader setFolder={setFolder} setIndexSelected={setIndexSelected}/>
            <div className="mainWidonwContainer" id="mainPortfolioWindow" style={{ left: `${leftVal}px`,  top: `${topVal}px`, width: `${windowWidth}px`}}>
                <div className="leftResizer" onMouseDown={(e)=>resizeMouseDown(e,"left",setLeft,windowWidth,setWindowWidth,leftVal)}></div>
                <div className="verticalWindowContainer" >
                    <div className="topResizer" onMouseDown={(e)=>resizeMouseDown(e,"top",setTop,windowHeight,setWindowHeight,topVal)}></div>
                    <div className={`mainWindow ${(theme)}`} id="mainWindow" >
                        <Header dragMouseDown={dragMouseDown} updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal}/>
                        <Body height={windowHeight} width={windowWidth} />
                        <Footer/>
                    </div>
                    <div className="bottomResizer" onMouseDown={(e)=>resizeMouseDown(e,"bottom",setTop,windowHeight,setWindowHeight,topVal)}></div>
                </div>
                <div className="rightResizer" onMouseDown={(e)=>resizeMouseDown(e,"right",setLeft,windowWidth,setWindowWidth,leftVal)}></div>
            </div>
            {windowDisplay==1?<Window theme={theme} selectedProject={selectedProject} resizeMouseDown={resizeMouseDown} dragMouseDown={dragMouseDown}/>:""}
            <WindowFooter />
        </ProjectContext.Provider>
    )
}
