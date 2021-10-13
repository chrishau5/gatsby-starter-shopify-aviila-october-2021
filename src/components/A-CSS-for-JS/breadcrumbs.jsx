import * as React from "react"
import { Link } from "gatsby"

const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol>{children}</ol>
    </nav>
  )
}

const Crumb = () => {
  return "TODO"
}

render(
  <Breadcrumbs>
    <Crumb>
      <Link to="" />
    </Crumb>
  </Breadcrumbs>
)

export default Breadcrumbs
