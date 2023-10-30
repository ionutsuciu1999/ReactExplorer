import React from "react"
import './Header.css';


export default function Header(props) {
    let executeOnce = 1;
    let startXposition = 0;
    let movedX = 0;
    let startYposition = 0;
    let movedY = 0;
    function dragStart(evt) {
        //get starting position
        if(executeOnce == 1){
            startXposition = evt.clientX;
            startYposition = evt.clientY;
            executeOnce = 0;
        }else{
            movedY = props.topValue+(evt.clientY - startYposition);
            movedX = props.leftValue+(evt.clientX - startXposition);
            props.updateLeft(movedX);
            props.updateTop(movedY);
        }
    }
      
    function dragEnd(evt) {
        console.log("END:"+evt.clientX);
        console.log("END2:"+evt.clientY)
        props.updateLeft(props.leftValue+(evt.clientX - startXposition));
        props.updateTop(props.topValue+(evt.clientY - startYposition));
        executeOnce = 1;
    }

    return (
        <header className="headerBody" onDrag={dragStart} onDragEnd={dragEnd}>
            <div className="headerBarTop" id="headerBarTop" >
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
                <img src="./icons/new.png"/>
                <span>Nuovo</span>
                <img className="folderControlsImageSmall" src="./icons/collapseBottom.png"/>
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