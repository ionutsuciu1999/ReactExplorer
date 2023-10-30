import React from "react"
import Header from "./Header.js"
import Body from "./Body.js"
import Footer from "./Footer.js"
import {useState} from 'react'
import './App.css';

export default function App() {
    let [leftVal, setLeft] = useState(0);
    let [topVal, setTop] = useState(0);
    let [position, setPosition] = useState("relative");
    return (
        <div className="mainWindow" id="mainWindow" style={{ left: `${leftVal}px`,  top: `${topVal}px`, position: `${position}`}}>
            <Header updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal} currentPosition={position} updatePosition={setPosition}/>
            <Body />
            <Footer />
        </div>
    )
}
