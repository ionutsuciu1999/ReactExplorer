import React from "react"

export default function WindowHeader(props) {
    return (
        <div id="windowHeader">
            <img src="../icons/wip.png" id="wip"/>
            <div id="nameTitle">
                <span>Augustin Suciu</span>
            </div>
            <div id="headerMenuContainer">
                <div onClick={()=>{props.setFolder("code"); props.setIndexSelected(1)}}>
                    <span>PROGETTI</span>
                </div>
                <div onClick={()=>{props.setFolder("documents"); props.setIndexSelected(3)}}>
                    <span>CONTATTI</span>
                </div>
            </div>
        </div>
    )
}
