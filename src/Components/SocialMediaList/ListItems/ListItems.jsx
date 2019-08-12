import React from "react"

function ListItems(props){
    return(
        <li>
            <a href={props.link} target="_blank">
                <img src={props.image} alt=""/>
            </a>
            {`${props.socialName}: ${props.nickName}`}
        </li>
    )
}

export default ListItems