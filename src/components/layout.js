import React, { useContext } from "react"
import { StateContext } from "./el/provider"
import Header from "./header"
import Footer from "./footer"
import SEO from "../components/seo"
const Layout = props => {
  const { stateSample } = useContext(
    StateContext
  )
  const [sample, setSample] = stateSample

  return (
    <StateContext.Consumer>
      {context => (
        <React.Fragment>
          <SEO title={props.title}></SEO>
          <PageAlert />
          <Header></Header>
          <main className="main">
            <div className="content">{props.children}</div>
          </main>
          <Footer></Footer>
        </React.Fragment>
      )}
    </StateContext.Consumer>
  )

}

export default Layout
