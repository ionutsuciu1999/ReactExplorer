import React from "react"


export default function Header(props) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        console.log(props);
        if(props.currentPosition=="relative"){
            props.updatePosition("absolute");
            //todo right position
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
            <div className="headerBarBottom">
                <div>
                    <img src="./icons/arrowLeft.png"/>
                    <img src="./icons/arrowRight.png"/>
                    <img src="./icons/arrowTop.png"/>
                    <img src="./icons/arrowReload.png"/>
                </div>
                <div>
                    <img className="folderControlsImage" src="./icons/folderImage.png"/>
                    <img className="folderControlsImageSmall" src="./icons/collapseRight.png"/>
                    <span>Desktop</span>
                    <img className="folderControlsImageSmall" src="./icons/collapseRight.png"/>
                </div>
                <div>
                    <span>Search in Desktop</span>
                    <img className="folderControlsImage" src="./icons/search.png"/>
                </div>
            </div>
            <div className="headerActionBar">
                <div>
                    <img src="./icons/new.png"/>
                    <span>Nuovo</span>
                    <img className="folderControlsImageSmall" src="./icons/collapseBottom.png"/>
                </div>
                <img className="actionLeftBorder" src="./icons/cut.png"/>
                <img src="./icons/copy.png"/>
                <img src="./icons/paste.png"/>
                <img src="./icons/delete.png"/>    
                <div>
                    <img className="actionLeftBorder" src="./icons/order.png"/>
                    <span>Order</span>
                    <img className="folderControlsImageSmall" src="./icons/collapseBottom.png"/>    
                </div>
                <div>
                    <img src="./icons/list.png"/>    
                    <span>View</span>
                    <img className="folderControlsImageSmall" src="./icons/collapseBottom.png"/>
                </div>
                <div>
                    <img src="./icons/filter.png"/>    
                    <span>Filter</span>
                    <img className="folderControlsImageSmall" src="./icons/collapseBottom.png"/>    
                </div>    
            </div>
        </header>
    )
}