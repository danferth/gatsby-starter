import React from "react"
import Layout from "../components/layout"
import Icon from "../images/svg/akio.svg"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import PageLink from "../components/el/pagelink"

const App = () => {
  return (
    <Layout title="home" description="description of page">
      <Icon
        css={css`
          ${tw`w-10 text-red-600 fill-current`}
          margin: 2rem auto;
        `}
      />
      <p css={tw`font-sans font-thin`}>
        This sentance has a <PageLink to="/about">PageLink</PageLink> to the
        about page. There is also an SVG on this page as well. Have fun and
        enjoy!
      </p>
    </Layout>
  )
}

export default App
