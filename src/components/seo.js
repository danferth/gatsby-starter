import React from "react"
import { Helmet } from "react-helmet"

const SEO = props => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Helmet>
  )
}

export default SEO
