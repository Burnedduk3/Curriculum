import React from "react"
import GitHub from "../../assets/Images/Icons/icons8-github-100.png"
import GitLab from "../../assets/Images/Icons/icons8-gitlab-96.png"
import Mail from "../../assets/Images/Icons/icons8-composing-mail-96.png"
import LinkedIn from "../../assets/Images/Icons/icons8-linkedin-100.png"
import ListItem from "./ListItems/ListItems"
import "./SocialMediaList.css"

function SocialMediaList(){
    return(
            <div className="SocialMedia">
                <ul className="MediaList">
                    <ListItem
                        link = "https://github.com/Burnedduk3"
                        image = {GitHub}
                        socialName = "GitHub"
                        nickName = "Burnedduk3"
                    />
                    <ListItem
                        link = "https://gitlab.com/Burnedduk3?nav_source=navbar"
                        image = {GitLab}
                        socialName = "GitLab"
                        nickName = "Burnedduk3"
                    />
                    <ListItem
                        link = "https://www.linkedin.com/in/juan-cabrera-75b43b179/"
                        image = {LinkedIn}
                        socialName = "LinkedIn"
                        nickName = "Juan David Cabrera Duran"
                    />
                    <ListItem
                        link = "https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                        image = {Mail}
                        socialName = "Mail"
                        nickName = "juandavid.juandis@gmail.com"
                    />
                </ul>
            </div>
    );
}

export default SocialMediaList