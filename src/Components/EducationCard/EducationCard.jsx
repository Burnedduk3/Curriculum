import React from "react"
import "./EducationCard.css"

function EducationCard(props) {

    return(
            <div className="Card">
                <h2>{props.name}</h2>
                <h2>Title: {props.title}</h2>
                <h2>Period: {props.period}</h2>
                    <img src={props.image} alt="University Logo" className="University Logo"/>
            </div>

    );
}

export default EducationCard