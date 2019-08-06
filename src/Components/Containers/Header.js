import React from "react"
import PersonalImage from "../../Images/NormalSize/Cabrera.jpg"
import SocialMediaList from "../Components/SocialMediaList"



function Header() {
    return(
        <header>
            <h1>Juan David Cabrera</h1>
            <h2>Informatic Engineering Student</h2>
            <img src={PersonalImage} alt="Personal"/>
            <SocialMediaList/>
        </header>
    )
}

export default Header