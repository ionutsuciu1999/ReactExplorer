import React from "react"
import {ProjectContext} from './App.js'

export default function ProjectResource(props) {
   const {folder,name,file} = props

    if(file.includes(".mp4")){
        return(
            <video className="projectResource" controls>
            <source src={`../${folder}${name}/${file}`} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        )
    }else{
        return(
            <img className="projectResource" src={`../${folder}${name}${file}`} />
        )
    }
}