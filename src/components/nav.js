import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon="home"></FontAwesomeIcon> Home
          </Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
