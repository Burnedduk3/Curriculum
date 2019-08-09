import React from "react"
import University from "../../assets/Images/NormalSize/UniversidadDeLaSabana.png"
import School from "../../assets/Images/NormalSize/ColegioColombo.png"
import "./EducationCard.css"

function EducationCard() {

    const state = {
        edu1:{
            institution:"Universidad De La Sabana",
            title:"Informatic engineering",
            period: "2017-2021"
        },
        edu2:{
            institution:"Colegio Colombo Americano",
            period: "2002-2016"
        }
    };

    return(
        <div className="Cards">
            <div className="Card">
                <h2>{state.edu1.institution}</h2>
                <h2>Title: {state.edu1.title}</h2>
                <h2>Period: {state.edu1.period}</h2>
                    <img src={University} alt="University Logo" className="University Logo"/>
            </div>
            <div className="Card">
                <h2>{state.edu2.institution}</h2>
                <h2>Period: {state.edu2.period}</h2>
                    <img src={School} alt="University Logo" className="University Logo"/>
            </div>
        </div>
    );
}

export default EducationCard