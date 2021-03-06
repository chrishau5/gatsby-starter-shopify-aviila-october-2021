import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { container, intro } from "./index.module.css"
import { Link } from "gatsby"

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
      <h1 className={intro}>Welcome to the GatsbyJS + Shopify Demo Store.</h1>
      <ul>
        <li>
          <Link to="/react-components">React Components</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
