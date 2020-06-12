import React from "react"
import { styled } from "@emotion/styled"
import tw from "tailwind.macro"

const DropDown = props => {
  return (
    // =============Dropdowns=================
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Options
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {/* <!--
Dropdown panel, show/hide based on dropdown state.

Entering: "transition ease-out duration-100"
  From: "transform opacity-0 scale-95"
  To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
  From: "transform opacity-100 scale-100"
  To: "transform opacity-0 scale-95"
--> */}
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
        <div className="rounded-md bg-white shadow-xs">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
            >
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                role="menuitem"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>





 // =============Dropdowns=================
 <div className="relative inline-block text-left">
 <div>
   <span className="rounded-md shadow-sm">
     <button
       type="button"
       className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
       id="options-menu"
       aria-haspopup="true"
       aria-expanded="true"
     >
       Options
       <svg
         className="-mr-1 ml-2 h-5 w-5"
         viewBox="0 0 20 20"
         fill="currentColor"
       >
         <path
           fillRule="evenodd"
           d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
           clip-rule="evenodd"
         />
       </svg>
     </button>
   </span>
 </div>

 {/* <!--
Dropdown panel, show/hide based on dropdown state.

Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
--> */}
 <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
   <div
     className="rounded-md bg-white shadow-xs"
     role="menu"
     aria-orientation="vertical"
     aria-labelledby="options-menu"
   >
     <div className="py-1">
       <a
         href="#"
         className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
         role="menuitem"
       >
         Edit
       </a>
       <a
         href="#"
         className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
         role="menuitem"
       >
         Duplicate
       </a>
     </div>
     <div className="border-t border-gray-100"></div>
     <div className="py-1">
       <a
         href="#"
         className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
         role="menuitem"
       >
         Archive
       </a>
       <a
         href="#"
         className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
         role="menuitem"
       >
         Move
       </a>
     </div>
     <div className="border-t border-gray-100"></div>
     <div className="py-1">
       <a
         href="#"
         className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
         role="menuitem"
       >
         Share
       </a>
       <a
         href="#"
         className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
         role="menuitem"
       >
         Add to favorites
       </a>
     </div>
     <div className="border-t border-gray-100"></div>
     <div className="py-1">
       <a
         href="#"
         className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
         role="menuitem"
       >
         Delete
       </a>
     </div>
   </div>
 </div>
</div>

  )
}

export default DropDown
