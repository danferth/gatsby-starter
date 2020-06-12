import React from "react"
import tw from "tailwind.macro"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import LayoutNavBar from "../components/layoutnavbar"
//ui components
import Avitars from "../components/ui/avitars"
import CtaSection from "../components/ui/ctasection"

const Ui = () => {
  return (
    <LayoutNavBar title="Ui Components">
      <>
        <UiWrap>
          <Avitars></Avitars>
        </UiWrap>
        <UiWrap>
          <CtaSection></CtaSection>
        </UiWrap>
      </>
    </LayoutNavBar>
  )
}
const UiWrap = styled.div`
  ${tw`shadow-md my-8 border`}
`

export default Ui
