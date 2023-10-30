import React from "react"
import Header from "./Header.js"
import Body from "./Body.js"
import Footer from "./Footer.js"
import {useState} from 'react'
import './App.css';

export default function App() {
    let [leftVal, setLeft] = useState(10);
    let [topVal, setTop] = useState(20);
    return (
        <div className="mainWindow" style={{ left: `${leftVal}px`,  top: `${topVal}px`}}>
            <Header updateLeft={setLeft} leftValue={leftVal} updateTop={setTop} topValue={topVal}/>
            <Body />
            <Footer />
        </div>
    )
}
