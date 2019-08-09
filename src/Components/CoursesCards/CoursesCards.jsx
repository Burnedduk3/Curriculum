import React from "react"
import Coursera from "../../assets/Images/NormalSize/coursera.png"
import "./CourseCards.css"

function CoursesCards(){
    const state = {
        cert1:{
          name:"Responsive Website Basics: Code with HTML, CSS, and JavaScript",
          institution:"Coursera",
          date: "February 2019",
          credetialID: "565H7VGF82VW",
          link:"https://www.coursera.org/account/accomplishments/verify/565H7VGF82VW"
        },

        cert2:{
            name:"Python Functions, Files, and Dictionaries",
            institution:"Coursera",
            date: "April 2019",
            credetialID: "7DWLJVLCSANU",
            link:"https://www.coursera.org/account/accomplishments/verify/7DWLJVLCSANU"
        },

        cert3:{
            name:"Python Classes and Inheritance",
            institution:"Coursera",
            date: "February 2019",
            credetialID: "V8EKZGJZTLWE",
            link:"https://www.coursera.org/account/accomplishments/verify/V8EKZGJZTLWE"
        },

        cert4:{
            name:"Data Collection and Processing with Python",
            institution:"Coursera",
            date: "February 2019",
            credetialID: "947TRNSAWJ7X",
            link:"https://www.coursera.org/account/accomplishments/verify/947TRNSAWJ7X"
        },

        cert5:{
            name:"Python Basics",
            institution:"Coursera",
            date: "January 2019",
            credetialID: "6NXKPUQRE2BP",
            link:"https://www.coursera.org/account/accomplishments/verify/6NXKPUQRE2BP"
        }
    };
    return(
        <div className="CoursesCards">
            <div className="courseCard">
                <h2>Name: {state.cert1.name} </h2>
                <h2>Intitution: {state.cert1.institution}</h2>
                <h2>Date: {state.cert1.date}</h2>
                <h2>Credential: {state.cert1.credetialID}</h2>
                <a href={state.cert1.link}
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name: {state.cert2.name} </h2>
                <h2>Intitution: {state.cert2.institution}</h2>
                <h2>Date: {state.cert2.date}</h2>
                <h2>Credential: {state.cert2.credetialID}</h2>
                <a href={state.cert2.link}
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name: {state.cert3.name} </h2>
                <h2>Intitution: {state.cert3.institution}</h2>
                <h2>Date: {state.cert3.date}</h2>
                <h2>Credential: {state.cert3.credetialID}</h2>
                <a href={state.cert3.link}
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name: {state.cert4.name} </h2>
                <h2>Intitution: {state.cert4.institution}</h2>
                <h2>Date: {state.cert4.date}</h2>
                <h2>Credential: {state.cert4.credetialID}</h2>
                <a href={state.cert4.link}
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>

            <div className="courseCard">
                <h2>Name: {state.cert5.name} </h2>
                <h2>Intitution: {state.cert5.institution}</h2>
                <h2>Date: {state.cert5.date}</h2>
                <h2>Credential: {state.cert5.credetialID}</h2>
                <a href={state.cert5.link}
                   target="_blank">
                    <img src={Coursera} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default CoursesCards