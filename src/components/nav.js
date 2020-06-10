import React from "react"
import NavLink from "./navlink"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = () => {
  return (
    <div
      className="nav"
      css={css`
        ${tw`py-4 bg-orange-1`}
      `}
    >
      <NavLink to="/">
        <FontAwesomeIcon icon="home"></FontAwesomeIcon> Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Nav
