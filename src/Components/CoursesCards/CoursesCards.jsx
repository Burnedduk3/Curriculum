import React from "react"
import Coursera from "../../assets/Images/NormalSize/coursera.png"
import "./CourseCards.css"

function CoursesCards(){
    return(
        <div className="CoursesCards">
            <div className="courseCard">
                <h2>Name:Responsive Website Basics: Code with HTML, CSS, and JavaScript</h2>
                <h2>Intitution: Coursera</h2>
                <h2>Date: April 2019</h2>
                <h2>Credential: 565H7VGF82VW</h2>
                <a href="https://www.coursera.org/account/accomplishments/verify/6NXKPUQRE2BP"
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name:Python Functions, Files, and Dictionaries</h2>
                <h2>Intitution: Coursera</h2>
                <h2>Date: February 2019</h2>
                <h2>Credential: 7DWLJVLCSANU</h2>
                <a href="https://www.coursera.org/account/accomplishments/verify/6NXKPUQRE2BP"
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name:Python Classes and Inheritance</h2>
                <h2>Intitution: Coursera</h2>
                <h2>Date: February 2019</h2>
                <h2>Credential: V8EKZGJZTLWE</h2>
                <a href="https://www.coursera.org/account/accomplishments/verify/6NXKPUQRE2BP"
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name:Data Collection and Processing with Python</h2>
                <h2>Intitution: Coursera</h2>
                <h2>Date: February 2019</h2>
                <h2>Credential: 947TRNSAWJ7X</h2>
                <a href="https://www.coursera.org/account/accomplishments/verify/6NXKPUQRE2BP"
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name: Python Basics</h2>
                <h2>Intitution: Coursera</h2>
                <h2>Date: January 2019</h2>
                <h2>Credential: 6NXKPUQRE2BP</h2>
                <a href="https://www.coursera.org/account/accomplishments/verify/6NXKPUQRE2BP"
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default CoursesCards