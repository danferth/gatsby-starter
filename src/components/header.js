import React from "react"
import SEO from "./seo"
import "../utils/fontawesome"
import NavBar from "./ui/navbar"
const Header = props => {
  return (
    <div className="header">
      <SEO title={props.title} description={props.description}></SEO>
      <NavBar></NavBar>
    </div>
  )
}

export default Header
