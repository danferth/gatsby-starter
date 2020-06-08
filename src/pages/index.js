import React from "react"
import Layout from "../components/layout"
import Icon from "../images/svg/akio.svg"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

const App = () => {
  return (
    <Layout title="home" description="description of page">
      <Icon
        css={css`
          ${tw`w-10 text-red-600 fill-current`}
          margin: 2rem auto;
        `}
      />
    </Layout>
  )
}

export default App
