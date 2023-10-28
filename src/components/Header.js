import React from "react"
import './Header.css';


export default function Header() {
    return (
        <header className="headerBody">
            <div className="headerBarTop">
                <div class="tabHeader">
                    <img src="./icons/Computer.png" className="headerBarTopIcon"/>
                    <span className="headerBarTopTitle">Ionut PORTFOLIO</span>
                </div>
                <div className="controlsHeader">
                    <img className="windowControlsImage" src="./icons/minimizeWindow.png"/>
                    <img className="windowControlsImage" src="./icons/maximizeWindow.png"/>
                    <img className="windowControlsImage" src="./icons/closeWindow.png"/>
                </div>
            </div>
            <div className="headerBarBottom">
                <div className="headerBarBottomControls">
                    <img className="windowControlsImage" src="./icons/arrowLeft.png"/>
                    <img className="windowControlsImage" src="./icons/arrowRight.png"/>
                    <img className="windowControlsImage" src="./icons/arrowTop.png"/>
                    <img className="windowControlsImage" src="./icons/arrowReload.png"/>
                </div>
                <div className="headerBarBottomFolder">
                    <img className="folderControlsImage" src="./icons/folderImage.png"/>
                    <img className="folderControlsImageSmall" src="./icons/collapseRight.png"/>
                    <span className="folderControlsText">Desktop</span>
                    <img className="folderControlsImageSmall" src="./icons/collapseRight.png"/>
                </div>
                <div className="headerBarBottomSearch">
                    <span className="folderControlsText">Search in Desktop</span>
                    <img className="folderControlsImage" src="./icons/search.png"/>
                </div>
            </div>
            <div className="headerActionBar">
                <img className="actionImage" src="./icons/new.png"/>
                <span className="actionText">Nuovo</span>
                <img className="actionImage" src="./icons/collapseBottom.png"/>
                <img className="actionImage" src="./icons/cut.png"/>
                <img className="actionImage" src="./icons/copy.png"/>
                <img className="actionImage" src="./icons/paste.png"/>
                <img className="actionImage" src="./icons/delete.png"/>    
                <img className="actionImage" src="./icons/order.png"/>    
                <img className="actionImage" src="./icons/list.png"/>    
                <span className="actionText">View</span>
                <img className="actionImage" src="./icons/collapseBottom.png"/>
                <img className="actionImage" src="./icons/filter.png"/>    
                <span className="actionText">Filtro</span>
                <img className="actionImage" src="./icons/collapseBottom.png"/>    
                    
            </div>
        </header>
    )
}