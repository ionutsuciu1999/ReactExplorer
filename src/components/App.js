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

    let [windowHeight, setWindowHeight] = useState(400);


    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0, previousY = 0, finalHeight = 0;

    function resizeMouseDown(e) {
        console.log("ok grago");
        e.preventDefault();
        pos4 = e.clientY;
        console.log("click="+pos4);
        document.onmouseup = resizeCloseDragElement;
        document.onmousemove = resizeElementDrag;
    }
    function resizeElementDrag(e) {
        e.preventDefault();
        
        pos2 = pos4 - e.clientY;
        console.log("pos2="+pos2);
        if(pos2<0){
            finalHeight = windowHeight + pos2;
        }else{
            finalHeight = windowHeight - pos2;
            
        }
        console.log(finalHeight);
        
        setWindowHeight(finalHeight);
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
            <div className="mainWidonwContainer" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`}}>
                <div className="leftResizer"></div>
                <div className="verticalWindowContainer" >
                    <div className="topResizer" onMouseDown={resizeMouseDown}></div>
                    <div className={`mainWindow ${(theme)}`} id="mainWindow" >
                        <Header updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <Body value={{windowHeight}}/>
                        <Footer />
                    </div>
                    <div className="bottomResizer" onMouseDown={resizeMouseDown}></div>
                </div>
                <div className="rightResizer"></div>
            </div>
            <Window theme={theme} selectedProject={selectedProject}/>
        </ThemeContext.Provider>
        </ProjectContext.Provider>
    )
}
