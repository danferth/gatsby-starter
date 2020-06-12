import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Danferth from "../../images/svg/danferth.svg"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import Transition from "../transition"

const HeroSection = props => {
  const [isOpen, setIsOpen] = useState(false)
  const data = useStaticQuery(graphql`
    {
      file(name: {}, relativePath: { eq: "headerimage.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const NavLink = props => {
    return (
      <Link
        to={props.to}
        css={css`
          ${tw`ml-8 font-medium text-gray-500 hover:text-gray-900`}
          &:first-of-type {
            margin-left: 0;
          }
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        `}
        activeStyle={tw`text-indigo-600 hover:text-indigo-900`}
        className={props.className}
      >
        {props.children}
      </Link>
    )
  }
  const MobileNavLink = props => {
    return (
      <Link
        to={props.to}
        css={css`
          ${tw`mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50`}
          &:first-of-type {
            margin-top: 0;
          }
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        `}
        activeStyle={tw`text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:bg-gray-100 focus:text-indigo-700`}
        className={props.className}
      >
        {props.children}
      </Link>
    )
  }
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/" aria-label="Home">
                    <Danferth tw="h-8 w-auto sm:h-10"></Danferth>
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="whyisthis inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/ui">UI</NavLink>
                <NavLink to="/login">Log In</NavLink>
              </div>
            </nav>
          </div>

          <Transition
            show={isOpen}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md">
                <div
                  className="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Danferth tw="h-8 w-auto"></Danferth>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="whatisthis inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Close menu"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <MobileNavLink to="/">Dashboard</MobileNavLink>
                    <MobileNavLink to="/about">About</MobileNavLink>
                    <MobileNavLink to="/contact">Contact</MobileNavLink>
                    <MobileNavLink to="/ui">UI</MobileNavLink>
                  </div>
                  <div>
                    <Link
                      to="/login"
                      className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Data to enrich your
                <br className="xl:hidden" />
                <span className="text-indigo-600 xl:ml-4">online business</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Img
          fluid={data.file.childImageSharp.fluid}
          imageStyle="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </div>
  )
}

export default HeroSection
