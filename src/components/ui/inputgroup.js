import React from "react"
import { styled } from "@emotion/styled"
import tw from "tailwind.macro"

const InputGroup = props => {
  return (
    // =============Input Groups=================
    <div>
      <label
        htmlFor="price"
        className="block text-sm leading-5 font-medium text-gray-700"
      >
        Price
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm sm:leading-5">$</span>
        </div>
        <input
          id="price"
          className="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <select
            aria-label="Currency"
            className="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default InputGroup
