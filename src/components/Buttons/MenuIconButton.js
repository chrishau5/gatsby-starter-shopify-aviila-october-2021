import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function MenuIconButton(props) {
  const { item } = props
  return (
    <Link to={item.link} onClick={props.onClick}>
      <MenuIcons>
        <img
          src={item.icon}
          alt={item.title}
          height={item.height}
          width={item.width}
        />
      </MenuIcons>
    </Link>
  )
}

const MenuIcons = styled.div`
  color: #f6ebeb;
  display: grid;
  grid-template-columns: 24px 24px;
  gap: 10px;
  padding: 10px;
  transition: 0.5s ease-out;

  :hover {
    opacity: 50%;
  }
`
