import React from "react"


export default function Header(props) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        console.log(props);
        if(props.currentPosition=="relative"){
            props.updatePosition("absolute");
        }
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        // set the element's new position:
        props.updateTop(props.topValue - pos2);
        props.updateLeft(props.leftValue - pos1);
    }
    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }

    return (
        <header className="headerBody">
            <div className="headerBarTop" id="headerBarTop"  onMouseDown={dragMouseDown}>
                <div className="tabHeader">
                    <img src="./icons/Computer.png"/>
                    <span className="headerBarTopTitle">Ionut PORTFOLIO</span>
                </div>
                <div className="controlsHeader">
                    <img src="./icons/minimizeWindow.png"/>
                    <img src="./icons/maximizeWindow.png"/>
                    <img src="./icons/closeWindow.png"/>
                </div>
            </div>
        </header>
    )
}