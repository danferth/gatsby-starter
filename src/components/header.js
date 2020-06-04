import React from "react"
import Nav from "./nav"
import SEO from "./seo"
const Header = props => {
  return (
    <div>
      <SEO title={props.title} description={props.description}></SEO>
      <h1>Header</h1>
      <Nav></Nav>
    </div>
  )
}

export default Header
