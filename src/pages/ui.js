import React from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Layout from "../components/layout"
//ui components
import Avitars from "../components/ui/avitars"
import CtaSection from "../components/ui/ctasection"
import NavBar from "../components/ui/navbar"

const Ui = () => {
  return (
    <Layout title="Ui Components">
      <div>
        <UiWrap>
          <Avitars></Avitars>
        </UiWrap>
        <UiWrap>
          <CtaSection></CtaSection>
        </UiWrap>
        <UiWrap>
          <NavBar></NavBar>
        </UiWrap>
      </div>
    </Layout>
  )
}
const UiWrap = styled.div`
  ${tw`shadow-md my-8 border`}
`

export default Ui
