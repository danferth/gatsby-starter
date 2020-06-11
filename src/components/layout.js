import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div>
      <Header title={props.title} description={props.description}></Header>
      <div className="layout">{props.children}</div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
