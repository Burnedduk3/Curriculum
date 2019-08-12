import React from "react"
import Coursera from "../../assets/Images/NormalSize/coursera.png"
import "./CourseCards.css"

function CoursesCards(props){
    return(
        <div className="courseCard">
            <h2>Name: {props.name}</h2>
            <h2>Intitution: {props.institution}</h2>
            <h2>Date: {props.date}</h2>
            <h2>Credential: {props.credetialID}</h2>
            <a href={props.link}
               target="_blank">
                <img src={Coursera} alt=""/>
            </a>
        </div>
    )
}

export default CoursesCards