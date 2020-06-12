import React from "react"
import Header from "./header"
//import Footer from "./footer"
import NavBar from "./ui/navbar"

const LayoutNavBar = props => {
  return (
    <>
      <Header title={props.title} description={props.description}></Header>
      <NavBar></NavBar>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            {props.title}
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
    </>
  )
}

export default LayoutNavBar
