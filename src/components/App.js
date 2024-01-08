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
    //to pass argument other than ehttps://stackoverflow.com/questions/71514671/how-to-pass-setstate-into-another-function-and-use-it-to-target-value-from-mater

    //todo da qualche parte la 2 finestra viene spostata quando ridimensionata alle stesse posizioni della prima, POS1,2,3,4.
    const resizeMouseDown = (e,direction,setDir,setWind) => {
        console.log("ok grago");
        e.preventDefault();
        //initial click position
        pos3 = e.clientX;
        pos4 = e.clientY;
        var handlerAAA = function(e) {resizeCloseDragElement()}
        var handlerBBB = function(e) {resizeElementDrag(e,direction,setDir,setWind)}
        document.addEventListener("mouseup",handlerAAA,false);
        document.addEventListener("mousemove",handlerBBB,false);

        const resizeElementDrag = (e,resizeDirection,setDir,setWind) =>{
            e.preventDefault();
            
            //when dragging calculare new size relatively to initial click position
            if(resizeDirection=="top"){
                pos2 = pos4 - e.clientY;
                finalHeight = windowHeight + pos2;
                windowVerticalMove = topVal-pos2;
                if(finalHeight>minHeight){
                    setDir(windowVerticalMove);
                    setWind(finalHeight);
                }else{
                    setWind(minHeight);
                    setDir(windowVerticalMove);
                }
            }else if(resizeDirection=="bottom"){
                pos2 = pos4 - e.clientY;
                finalHeight = windowHeight - (pos2);
                windowVerticalMove = topVal;
                if(finalHeight>minHeight){
                    setDir(windowVerticalMove);
                    setWind(finalHeight);
                }else{
                    setWind(minHeight);
                    setDir(windowVerticalMove);
                }
            }else if(resizeDirection=="left"){
                console.log("qui");
                pos1 = pos3 - e.clientX;
                finalWidth = windowWidth + pos1;
                windowHorizontalMove = leftVal-pos1;
                if(finalWidth>minWidth){
                    setDir(windowHorizontalMove);
                    setWind(finalWidth);
                }else{
                    setDir(windowHorizontalMove);
                    setWind(minWidth);
                }
            }else if(resizeDirection=="right"){
                pos1 = pos3 - e.clientX;
                finalWidth = windowWidth - (pos1);
                windowHorizontalMove = leftVal;
                if(finalWidth>minWidth){
                    setDir(windowHorizontalMove);
                    setWind(finalWidth);
                }else{
                    setDir(windowHorizontalMove);
                    setWind(minWidth);
                }
            }
            
            console.log("....");
            // set the element's new position:
            
        }
        const resizeCloseDragElement = () =>{
            /* stop moving when mouse button is released:*/
            console.log("FINEE");
            document.removeEventListener("mouseup",handlerAAA);
            document.removeEventListener("mousemove",handlerBBB);
        }
    }
    
    
    return (
        <ProjectContext.Provider value={{selectedProject, setSelectedProject}}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="mainWidonwContainer" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`, width: `${windowWidth}px`}}>
                <div className="leftResizer" onMouseDown={(e)=>resizeMouseDown(e,"left",setLeft,setWindowWidth)}></div>
                <div className="verticalWindowContainer" >
                    <div className="topResizer" onMouseDown={(e)=>resizeMouseDown(e,"top",setTop,setWindowHeight)}></div>
                    <div className={`mainWindow ${(theme)}`} id="mainWindow" >
                        <Header updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <Body height={windowHeight} width={windowWidth}/>
                        <Footer />
                    </div>
                    <div className="bottomResizer" onMouseDown={(e)=>resizeMouseDown(e,"bottom",setTop,setWindowHeight)}></div>
                </div>
                <div className="rightResizer" onMouseDown={(e)=>resizeMouseDown(e,"right",setLeft,setWindowWidth)}></div>
            </div>
            <Window theme={theme} selectedProject={selectedProject} resizeMouseDown={resizeMouseDown}/>
        </ThemeContext.Provider>
        </ProjectContext.Provider>
    )
}
