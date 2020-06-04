import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
