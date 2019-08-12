import React from "react"
import SabanaHerons from "../../assets/Images/NormalSize/Logo.png"
import "./RepresentativeGroups.css"

function RepresentativeGroups(props){

    return(
        <div className="Team">
            <h2>Name: {props.name} </h2>
            <h2>Period: {props.period}</h2>
            <h2>Accomplishments: {props.accomplishments}</h2>
            <a href={props.link} target="_blank">
                <img src={SabanaHerons} alt=""/>
            </a>
        </div>
    )
}

export default RepresentativeGroups