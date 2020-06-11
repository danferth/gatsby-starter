import React from "react"
import { Link } from "gatsby"

const NavLink = props => {
  const style = {
    color: "dodgerblue",
    padding: "1rem 2rem",
    background: "white",
  }
  const activeStyle = {
    color: "white",
    background: "dodgerblue",
  }
  return (
    <Link
      to={props.to}
      style={style}
      activeStyle={activeStyle}
      className={props.className}
    >
      {props.children}
    </Link>
  )
}

export default NavLink
