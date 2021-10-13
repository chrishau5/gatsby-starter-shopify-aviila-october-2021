import * as React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol>{children}</ol>
    </nav>
  )
}

const Crumb = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export function BreadcrumbComponent() {
  return (
    <Breadcrumbs>
      <Crumb>
        <Link to="/">Home</Link>
      </Crumb>
      <Crumb>
        <Link to="/about">About Us</Link>
      </Crumb>
    </Breadcrumbs>
  )
}
