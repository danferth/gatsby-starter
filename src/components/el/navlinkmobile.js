import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

const NavLinkMobile = props => {
  return (
    <Link
      to={props.to}
      css={css`
        ${tw`mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
        &:first-of-type {
          margin-top: 0;
        }
        transition-property: background-color, border-color, color, fill, stroke,
          opacity, box-shadow, transform;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      `}
      activeStyle={tw` text-white bg-gray-900 `}
      className={props.className}
    >
      {props.children}
    </Link>
  )
}
export default NavLinkMobile
