import React from "react"
import './Header.css';


export default function Header() {
    return (
        <header className="headerBody">
            <div className="headerBarTop">
                <div class="tabHeader">
                    <img src="./icons/Computer.png" class="headerBarTopIcon"/>
                    <span>Ionut Suciu PORTFOLIO</span>
                </div>
                <div className="controlsHeader"></div>
            </div>
            <div className="headerBarBottom"></div>
        </header>
    )
}