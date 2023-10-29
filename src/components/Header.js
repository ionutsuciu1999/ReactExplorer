import React from "react"
import './Header.css';


export default function Header() {
    return (
        <header className="headerBody">
            <div className="headerBarTop">
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