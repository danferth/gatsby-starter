import React from "react"
import { Link } from "gatsby"

const PageLink = props => {
  const style = {
    color: "red",
  }

  return (
    <Link to={props.to} style={style} className={props.className}>
      {props.children}
    </Link>
  )
}

export default PageLink
