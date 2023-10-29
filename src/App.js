import React from "react"
import Header from "./components/Header.js"
import Body from "./components/Body.js"
import Footer from "./components/Footer.js"
import './App.css';

export default function App() {
    return (
        <div className="mainWindow">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}
