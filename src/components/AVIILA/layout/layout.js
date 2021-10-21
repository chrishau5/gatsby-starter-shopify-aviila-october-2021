import React from "react"
// import "./layout.scss";
import Header from "./header"
import "@fontsource/overpass"
import "@fontsource/montserrat"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
