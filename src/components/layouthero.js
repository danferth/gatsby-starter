import React from "react"
import Header from "./header"
import HeroSection from "./ui/herosection"
//import Footer from "./footer"

const Layout = props => {
  return (
    <>
      <Header title={props.title} description={props.description}></Header>
      <HeroSection></HeroSection>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
    </>
  )
}

export default Layout
