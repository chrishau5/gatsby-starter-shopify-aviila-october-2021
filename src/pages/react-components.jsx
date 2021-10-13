import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"
import { LoginForm } from "../components/A-CSS-for-JS/loginForm"
import { BreadcrumbComponent } from "../components/A-CSS-for-JS/breadcrumbs"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero(props) {
  return (
    <div className={container}>
      <h1 className={intro}>This is the AVIILA Code Playground</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  )
}

export default function ReactComponents({ data }) {
  return (
    <Layout>
      <Hero />
      <div className={container}>
        <LoginForm
          handleSubmit={(ev) => {
            ev.preventDefault()
            alert("Submitted!")
          }}
        />
      </div>
      <div className={container}>
        <BreadcrumbComponent />
      </div>

      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
