import React from "react"
import Header from "./Containers/Header/Header.jsx"
import MainContent from "./Containers/MainContent/MainContent.jsx"
import Footer from "./Containers/Footer/Footer.jsx"
import "./../assets/styles/Styles.css"
import "./App.css"

export default () => (
    <div className="page">
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
)


//export default App