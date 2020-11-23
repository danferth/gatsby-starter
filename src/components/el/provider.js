import React, { useState } from "react"

export const StateContext = React.createContext([])

const Provider = props => {
  const [sample, setSample] = useState([])
  return (
    <StateContext.Provider
      value={{
        stateSample: [sample, setSample],
      }}
    >
      {props.children}
    </StateContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>