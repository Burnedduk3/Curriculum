import React from "react"
import University from "../../assets/Images/NormalSize/UniversidadDeLaSabana.jpeg"
import School from "../../assets/Images/NormalSize/ColegioColombo.png"
import "./EducationCard.css"

function EducationCard() {
    return(
        <div className="Cards">
            <div className="Card">
                <h2>Universidad De La Sabana</h2>
                <h2>Title: Informatic Engineering</h2>
                <h2>Period: 2017-2021</h2>
                <img src={University} alt="University Logo" className="University Logo"/>
            </div>
            <div className="Card">
                <h2>Colegio Colombo Americano</h2>
                <h2>Period: 2017-2021</h2>
                <img src={School} alt="University Logo" className="University Logo"/>
            </div>
        </div>
    );
}

export default EducationCard