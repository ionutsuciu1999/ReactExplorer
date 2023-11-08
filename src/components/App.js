import React from "react"
import Header from "./Header.js"
import Body from "./Body.js"
import Footer from "./Footer.js"
import {useState} from 'react'
import {createContext} from 'react'
import './App.css';


export const ThemeContext = createContext(null);

export default function App() {
    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);
    let [position, setPosition] = useState("relative");
    let [theme, setTheme] = useState("dark");

    function toggleTheme(){
        setTheme((curr)=>(curr==="light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id="mainWidonwContainer" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`}}>
                <div id="leftResizer"></div>
                <div id="verticalWindowContainer">
                    <div id="topResizer"></div>
                    <div className={`mainWindow ${(theme)}`} id="mainWindow" >
                        <Header updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
                        <Body />
                        <Footer />
                    </div>
                    <div id="bottomResizer"></div>
                </div>
                <div id="rightResizer"></div>
            </div>
        </ThemeContext.Provider>
    )
}
