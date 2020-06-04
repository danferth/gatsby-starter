import React from "react"
import { useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"


const SEO = ()=>{
    return(
        <Helmet>
                    <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>{site.title}</title>
        <meta name="description" content={site.description}>
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="msapplication-tap-highlight" content="no" />


        {/* <link rel="apple-touch-icon" sizes="180x180" href="/assets/build/favicons/apple-touch-icon.png?v=3.0.0"> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/assets/build/favicons/favicon-32x32.png?v=3.0.0"> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/assets/build/favicons/favicon-16x16.png?v=3.0.0"> */}
        {/* <link rel="manifest" href="/assets/build/favicons/site.webmanifest?v=3.0.0"> */}
        {/* <link rel="mask-icon" href="/assets/build/favicons/safari-pinned-tab.svg?v=3.0.0" color="#0085ac"> */}
        {/* <link rel="shortcut icon" href="/assets/build/favicons/favicon.ico?v=3.0.0"> */}
        <meta name="apple-mobile-web-app-title" content="danferth">
        <meta name="application-name" content="danferth">
        <meta name="msapplication-TileColor" content="#0085ac">
        <meta name="msapplication-config" content="/assets/build/favicons/browserconfig.xml?v=3.0.0">
        <meta name="theme-color" content="#0085ac"></meta>
        </Helmet>
    )
}




export default SEO