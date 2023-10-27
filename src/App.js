import React from "react"
import Header from "./components/Header.js"
import Meme from "./components/Meme.js"
import './App.css';

export default function App() {
    return (
        <div className="mainWindow">
            <Header />
            <Meme />
        </div>
    )
}
