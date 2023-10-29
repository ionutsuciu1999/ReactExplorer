import React from "react"
import './RightFolder.css';


export default function RightFolder(props) {
   return(
        <div className="projectContainer">
            <img src={`../icons/${props.item.url}`} />
            <span>{props.item.name}</span>
        </div>
    )
}