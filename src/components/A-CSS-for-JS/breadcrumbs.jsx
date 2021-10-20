import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol>{children}</ol>
    </nav>
  )
}

const Crumb = ({ to, isCurrentPage, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink to={to} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  )
}

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;

  &:not(:first-of-type) {
    margin-left: var(--spacing);

    &:before {
      content: "";
      display: inline-block;
      transform: rotate(15deg);
      border-right: 1px solid;
      margin-right: var(--spacing);
      height: 0.8em;
      opacity: 0.5;
    }
  }
`

const CrumbLink = styled((props) => <Link {...props} />)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`

export function BreadcrumbComponent() {
  return (
    <Breadcrumbs>
      <Crumb to="/">Home</Crumb>
      <Crumb to="/shorts">Shorts</Crumb>
      <Crumb to="/the-biscayne-short">The Biscayne Short</Crumb>
    </Breadcrumbs>
  )
}
