import React from "react"
import Cellphone from "../../assets/Images/Icons/icons8-phone-message-100.png"
import GitHub from "../../assets/Images/Icons/icons8-github-100.png"
import GitLab from "../../assets/Images/Icons/icons8-gitlab-96.png"
import Mail from "../../assets/Images/Icons/icons8-composing-mail-96.png"
import LinkedIn from "../../assets/Images/Icons/icons8-linkedin-100.png"
import "./SocialMediaList.css"

function SocialMediaList(){
    return(
            <div className="SocialMedia">
                <ul className="MediaList">
                    <li><img src={Cellphone} alt=""/>Cellphone: +57 316 740 4216</li>
                    <li>
                        <a href="https://github.com/Burnedduk3">
                            <img src={GitHub} alt=""/>
                        </a>
                        GitHub: Burnedduk3
                    </li>
                    <li>
                        <a href="https://gitlab.com/Burnedduk3?nav_source=navbar">
                            <img src={GitLab} alt=""/>
                        </a>
                        GitLab: Burnedduk3
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/juan-cabrera-75b43b179/">
                            <img src={LinkedIn} alt=""/>
                        </a>
                        LinkedIn: Juan David Cabrera Duran
                    </li>
                    <li><img src={Mail} alt=""/>Mail: juandavid.juandis@gmail.com</li>
                </ul>
            </div>
    );
}

export default SocialMediaList