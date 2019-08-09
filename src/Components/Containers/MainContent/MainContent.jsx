import React from "react"
import EducationCard from "../../EducationCard/EducationCard"
import  CoursesCards from "../../CoursesCards/CoursesCards"
import RepresentativeGroups from "../../RepresentativeGroups/RepresentativeGroups"
import "./MainContent.css"

function MainContent(){
    return(
        <main className="MainContent">
            <h1 className="EducationTitle">Education</h1>
            <EducationCard/>
            <h1 className="EducationTitle">Courses</h1>
            <CoursesCards/>
            <h1 className="EducationTitle">Representative Groups</h1>
            <RepresentativeGroups/>
        </main>
    )
}

export default MainContent