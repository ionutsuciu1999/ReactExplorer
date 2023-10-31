import React from "react"


export default function RightFolder(props) {
   return(
        <div className="projectContainer">
            <img src={`../icons/${props.item.url}`} />
            <span>{props.item.name}</span>
        </div>
    )
}