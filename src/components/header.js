import React from "react"
import Nav from "./nav"
import SEO from "./seo"
import "../utils/fontawesome"

const Header = props => {
  return (
    <div className="header">
      <SEO title={props.title} description={props.description}></SEO>
      <h1>Header</h1>
      <Nav></Nav>
    </div>
  )
}

export default Header
