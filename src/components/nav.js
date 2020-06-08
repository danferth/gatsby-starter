import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <FontAwesomeIcon icon="home"></FontAwesomeIcon> Home
      </Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Nav
