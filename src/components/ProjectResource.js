import React from "react"
import {ProjectContext} from './App.js'

export default function ProjectResource(props) {
   
    if(props.file.includes(".mp4")){
        return(
            <video className="projectResource" controls>
            <source src={`../${props.folder}${props.name}/${props.file}`} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        )
    }else{
        return(
            <img className="projectResource" src={`../${props.folder}${props.name}${props.file}`} />
        )
    }
}