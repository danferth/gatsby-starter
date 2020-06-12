import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import Transition from "../transition"
import Akio from "../../images/svg/akio.svg"
import Danferth from "../../images/svg/danferth.svg"

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  const ProfileLink = styled.a`
    ${tw`block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100`}
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  `
  const NavLink = props => {
    return (
      <Link
        to={props.to}
        css={css`
          ${tw`ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
          &:first-of-type {
            margin-left: 0;
          }
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        `}
        activeStyle={tw` text-white bg-gray-900`}
        className={props.className}
      >
        {props.children}
      </Link>
    )
  }
  const NavLinkMobile = props => {
    return (
      <Link
        to={props.to}
        css={css`
          ${tw`mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700`}
          &:first-of-type {
            margin-top: 0;
          }
          transition-property: background-color, border-color, color, fill,
            stroke, opacity, box-shadow, transform;
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
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {/* Icon when menu is closed.  */}
              <svg
                className={`${mobileMenu ? `hidden` : `block`} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* //Icon when menu is open.  */}
              <svg
                className={`${!mobileMenu ? `hidden` : `block`} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to="/">
                <Akio
                  css={tw`block lg:hidden h-8 w-auto text-red-600 fill-current`}
                />
                <Danferth
                  css={tw`hidden lg:block h-8 w-auto text-gray-300 fill-current`}
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/ui">UI</NavLink>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* //Profile dropdown  */}
            <div className="ml-3 relative">
              <div>
                <button
                  className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <Transition
                show={isOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                  <div
                    className="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <ProfileLink href="#" role="menuitem">
                      Your Profile
                    </ProfileLink>
                    <ProfileLink href="#" role="menuitem">
                      Settings
                    </ProfileLink>
                    <ProfileLink href="#" role="menuitem">
                      Sign out
                    </ProfileLink>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state.
          Menu open: "block", Menu closed: "hidden" */}
      <div className={`${mobileMenu ? `block sm:block` : `hidden sm:hidden`}`}>
        <div className="px-2 pt-2 pb-3">
          <NavLinkMobile to="/">Dashboard</NavLinkMobile>
          <NavLinkMobile to="/about">About</NavLinkMobile>
          <NavLinkMobile to="/contact">Contact</NavLinkMobile>
          <NavLinkMobile to="/ui">UI</NavLinkMobile>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
