// Created 10/9/21 in Josh Comeau's course
// This component displays
import * as React from "react"
const Quote = ({ by, source, children }) => {
  return (
    <figure>
      <QuoteContent>{children}</QuoteContent>
      <figcaption>
        <Author>
          <SourceLink href={source}>{by}</SourceLink>
        </Author>
      </figcaption>
    </figure>
  )
}

const QuoteContent = styled.blockquote`
  margin: 0;
  background: hsl(0deg 0% 90%);
  padding: 16px 20px;
  border-radius: 8px;
  font-style: italic;

  &::before {
    content: "“";
  }

  &::after {
    content: "”";
  }
`

const Author = styled.cite`
  display: block;
  text-align: right;
  margin-top: 8px;
`

const SourceLink = styled.a`
  text-decoration: none;
  color: hsl(0deg 0% 35%);

  &::before {
    content: "—";
  }
`

render(
  <Quote
    by="Trey Anastasio"
    source="https://quoteinvestigator.com/2011/09/08/640k-enough/"
  >
    Set the gearshift for the high gear of your soul, you've got to run like an
    antelope out of control!
  </Quote>
)
