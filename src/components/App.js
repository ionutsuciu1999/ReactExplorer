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

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, previousY = 0, finalHeight = 0, finalWidth = 0, windowVerticalMove = 0, windowHorizontalMove = 0, resizeDirection = "top", minWidth = 400, minHeight = 230;
    //todo se setLeft function and pass it and call it 
    //to pass argument other than e https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick and https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters
    function resizeMouseDown(e,direction,setLeft) {
        console.log(setLeft)
        console.log("ok grago");
        resizeDirection = direction;
        e.preventDefault();
        //initial click position
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log("click="+pos4);
        document.onmouseup = resizeCloseDragElement;
        document.onmousemove = resizeElementDrag;
    }
    function resizeElementDrag(e) {
        e.preventDefault();
        console.log(resizeDirection);
        //when dragging calculare new size relatively to initial click position
        if(resizeDirection=="top"){
            pos2 = pos4 - e.clientY;
            finalHeight = windowHeight + pos2;
            windowVerticalMove = topVal-pos2;
            if(finalHeight>minHeight){
                setTop(windowVerticalMove);
                setWindowHeight(finalHeight);
            }else{
                setWindowHeight(minHeight);
                setTop(windowVerticalMove);
            }
        }else if(resizeDirection=="bottom"){
            pos2 = pos4 - e.clientY;
            finalHeight = windowHeight - (pos2);
            windowVerticalMove = topVal;
            if(finalHeight>minHeight){
                setTop(windowVerticalMove);
                setWindowHeight(finalHeight);
            }else{
                setWindowHeight(minHeight);
                setTop(windowVerticalMove);
            }
        }else if(resizeDirection=="left"){
            pos1 = pos3 - e.clientX;
            finalWidth = windowWidth + pos1;
            windowHorizontalMove = leftVal-pos1;
            if(finalWidth>minWidth){
                setLeft(windowHorizontalMove);
                setWindowWidth(finalWidth);
            }else{
                setLeft(windowHorizontalMove);
                setWindowWidth(minWidth);
            }
        }else if(resizeDirection=="right"){
            pos1 = pos3 - e.clientX;
            finalWidth = windowWidth - (pos1);
            windowHorizontalMove = leftVal;
            if(finalWidth>minWidth){
                setLeft(windowHorizontalMove);
                setWindowWidth(finalWidth);
            }else{
                setLeft(windowHorizontalMove);
                setWindowWidth(minWidth);
            }
        }
        
        
        
        previousY = e.clientY;
        console.log("....");
        // set the element's new position:
        
    }
    function resizeCloseDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
    
    return (
        <ProjectContext.Provider value={{selectedProject, setSelectedProject}}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="mainWidonwContainer" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`, width: `${windowWidth}px`}}>
                <div className="leftResizer" onMouseDown={(e)=>resizeMouseDown(e,"left")}></div>
                <div className="verticalWindowContainer" >
                    <div className="topResizer" onMouseDown={(e)=>resizeMouseDown(e,"top")}></div>
                    <div className={`mainWindow ${(theme)}`} id="mainWindow" >
                        <Header updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <Body height={windowHeight} width={windowWidth}/>
                        <Footer />
                    </div>
                    <div className="bottomResizer" onMouseDown={(e)=>resizeMouseDown(e,"bottom")}></div>
                </div>
                <div className="rightResizer" onMouseDown={(e)=>resizeMouseDown(e,"right")}></div>
            </div>
            <Window theme={theme} selectedProject={selectedProject} resizeMouseDown={resizeMouseDown}/>
        </ThemeContext.Provider>
        </ProjectContext.Provider>
    )
}
