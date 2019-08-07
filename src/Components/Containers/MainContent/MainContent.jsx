import React from "react"
import EducationCard from "../../EducationCard/EducationCard"
import  CoursesCards from "../../CoursesCards/CoursesCards"
import "./MainContent.css"

function MainContent(){
    return(
        <main className="MainContent">
            <h1 className="EducationTitle">Education</h1>
            <EducationCard/>
            <h1 className="EducationTitle">Courses</h1>
            <CoursesCards/>
        </main>
    )
}

export default MainContent