import React from "react"
import PersonalImage from "../../../assets/Images/NormalSize/Cabrera.jpg"
import SocialMediaList from "../../SocialMediaList/SocialMediaList.jsx"
import "./Header.css"



function Header() {
    return(
        <header className="Header">
            <h1>Juan David Cabrera</h1>
            <h2>Informatic Engineering Student</h2>
            <img src={PersonalImage} alt="Personal" className="Header_Image"/>
            <SocialMediaList/>
        </header>
    )
}

export default Header