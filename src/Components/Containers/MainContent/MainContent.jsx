import React from "react"
import EducationCard from "../../EducationCard/EducationCard"
import  CoursesCards from "../../CoursesCards/CoursesCards"
import RepresentativeGroups from "../../RepresentativeGroups/RepresentativeGroups"
import University from "../../../assets/Images/NormalSize/UniversidadDeLaSabana.png"
import School from "../../../assets/Images/NormalSize/ColegioColombo.png"
import "./MainContent.css"

function MainContent(){
    return(
        <main className="MainContent">

            <h1 className="EducationTitle">Education</h1>

            <div className="Cards">
                <EducationCard
                    institution = "Universidad De La Sabana"
                    title = "Informatic engineering"
                    period =  "2017-2021"
                    image = {University}
                />
                <EducationCard
                    institution = "Colegio Colombo Americano"
                    title = "Informatic engineering"
                    period =  "2002-2016"
                    image = {School}
                />
            </div>

            <h1 className="EducationTitle">Courses</h1>

            <div className="CoursesCards">
                <CoursesCards
                    name="Responsive Website Basics: Code with HTML, CSS, and JavaScript"
                    institution="Coursera"
                    date="February 2019"
                    credetialID ="565H7VGF82VW"
                    link="https://www.coursera.org/account/accomplishments/verify/565H7VGF82VW"/>
                <CoursesCards
                    name="Python Functions, Files, and Dictionaries"
                    institution = "Coursera"
                    date = "April 2019"
                    credetialID = "7DWLJVLCSANU"
                    link = "https://www.coursera.org/account/accomplishments/verify/7DWLJVLCSANU"/>
                <CoursesCards
                    name="Python Classes and Inheritance"
                    institution = "Coursera"
                    date = "February 2019"
                    credetialID = "V8EKZGJZTLWE"
                    link = "https://www.coursera.org/account/accomplishments/verify/V8EKZGJZTLWE"/>
                <CoursesCards
                    name="Data Collection and Processing with Python"
                    institution = "Coursera"
                    date = "February 2019"
                    credetialID = "947TRNSAWJ7X"
                    link = "https://www.coursera.org/account/accomplishments/verify/947TRNSAWJ7X"/>
                <CoursesCards
                    name="Python Basics"
                    institution = "Coursera"
                    date = "January 2019"
                    credetialID = "6NXKPUQRE2BP"
                    link = "https://www.coursera.org/account/accomplishments/verify/6NXKPUQRE2BP"/>
            </div>

            <h1 className="EducationTitle">Representative Groups</h1>

            <div className="RepresentativeTeams">
                <RepresentativeGroups
                    title = "Sabana Herons"
                    period = "2017-2 - 2019-1"
                    accomplishments = "2nd Place in Robocup"
                    link = "http://sabanaherons.co/"
                />
            </div>
        </main>
    )
}

export default MainContent