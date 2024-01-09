import React from "react"
import './Body.css';
import projectsData from "../projectsData.js"
import {useState, useEffect } from 'react'
import {ThemeContext} from './App.js'
import {useContext} from 'react';
import {ProjectContext} from './App.js'
import ProjectResource from "./ProjectResource.js";


export default function BodyWindow(props) {
    
    let filesNumber = 0;
    let projectTitle = "";
    let projectDescription = "";
    let projectIcons = [];

    projectsData.data.projects.map(item => {
        if(item.id==props.selectedProject){
            filesNumber = item.files.length;
            projectTitle = item.name;
            projectDescription = item.description;
           
            for(var i = 0; i<item.icons.length; i++){
                projectIcons.push(item.icons[i]);
            }
            
        }
    });




    let [projectFile, setProjectFile] = useState(0);
    const resourceProjects = projectsData.data.projects.map(item => {
        if(item.id==props.selectedProject){
            return(
            <ProjectResource
                folder="projects/"
                name={item.name+"/"}
                file={item.files[projectFile]}
            />
            )
        }
    });

    const iconsProject = projectIcons.map(item => {
        
            return(
            <ProjectResource
                folder="icons/"
                name={""}
                file={item}
            />
            )
    });

    function updateProjectFile(direction){
        console.log(filesNumber);
        if(direction=="next"){
            if(projectFile<filesNumber-1){
                setProjectFile(projectFile+1);
            }else{
                projectFile = -1;
            }
        }else if(direction=="prev"){
            if(projectFile>filesNumber){
                setProjectFile(projectFile-1);
            }else{
                projectFile = filesNumber-1;
            }
        }
    }

    return (
        <div className="bodyProjectContainer" style={{ height: `${props.height}px`}}>
            <div className="bodyProject">
                <div id="previousProject"><img className="projectControls" src="./icons/collapseLeft.png" onClick={()=>updateProjectFile("prev")}/></div>
                <div className="projectDiv">
                    {resourceProjects}
                </div>
                <div id="nextProject"><img className="projectControls" src="./icons/collapseRight.png" onClick={()=>updateProjectFile("next")} /></div>
            </div>
            <div className="projectTop"><span className="projectTitle">{projectTitle}</span><div className="projectResourceIcons">{iconsProject}</div></div>
            <div className="projectDescription">{projectDescription}</div>
        </div>
    )
}