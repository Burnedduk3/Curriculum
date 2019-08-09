import React from "react"
import SabanaHerons from "../../assets/Images/NormalSize/Logo.png"
import "./RepresentativeGroups.css"

function RepresentativeGroups(){
    const state = {
        team:{
            title: "Sabana Herons",
            period: "2017-2 - 2019-1",
            accomplishments:"2nd Place in Robocup",
            link: "http://sabanaherons.co/"
        }
    };

    return(
        <div className="RepresentativeTeams">
            <div className="Team">
                <h2>Name: {state.team.title} </h2>
                <h2>Period: {state.team.period}</h2>
                <h2>Accomplishments: {state.team.accomplishments}</h2>
                <a href={state.team.link}
                   target="_blank">
                    <img src={SabanaHerons} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default RepresentativeGroups