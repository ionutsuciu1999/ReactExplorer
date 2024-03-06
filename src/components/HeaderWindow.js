import React from "react"


export default function HeaderWindow(props) {
    const {dragMouseDown, updateLeft, leftValue, updateTop, topValue, currentPosition, updatePosition, setWindowDisplay} = props;

    
    return (
        <header className="headerBody" >
            <div className="headerBarTop" id="headerBarTop" onMouseDown={(e)=>dragMouseDown(e, updateTop, updateLeft, topValue, leftValue, currentPosition, updatePosition)}>
                <div>
                </div>
                <div className="controlsHeader">
                    <img src="./icons/minimizeWindow.png"/>
                    <img src="./icons/maximizeWindow.png"/>
                    <img src="./icons/closeWindow.png" id="closeProjectWindow" onClick={()=>{console.log("clccc"); setWindowDisplay(0)}}/>
                </div>
            </div>
        </header>
    )
}