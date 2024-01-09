import React from "react"


export default function Header(props) {

    return (
        <header className="headerBody" >
            <div className="headerBarTop" id="headerBarTop" onMouseDown={(e)=>props.dragMouseDown(e,props.updateTop,props.updateLeft,props.topValue,props.leftValue,props.currentPosition,props.updatePosition)}>
                <div>
                </div>
                <div className="controlsHeader">
                    <img src="./icons/minimizeWindow.png"/>
                    <img src="./icons/maximizeWindow.png"/>
                    <img src="./icons/closeWindow.png" id="closeProjectWindow" onClick={()=>document.getElementById("projectWindow").style.display = "none"}/>
                </div>
            </div>
        </header>
    )
}