import React from "react"
import SEO from "./seo"
import "../utils/fontawesome"
const Header = props => {
  return (
    <div className="header">
      <SEO title={props.title} description={props.description}></SEO>
    </div>
  )
}

export default Header
