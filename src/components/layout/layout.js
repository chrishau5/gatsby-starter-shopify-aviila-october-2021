import React from "react"
// import "./layout.scss";
import Header from "./header"

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
