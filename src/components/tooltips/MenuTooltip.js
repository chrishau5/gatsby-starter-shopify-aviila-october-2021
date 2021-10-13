import React from "react"
import styled from "styled-components"
import { tooltipData } from "../data/menuData"
import MenuButton from "../Buttons/MenuButton"

export default function MenuTooltip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton item={item} key={index} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(12, 12, 14, 0.25),
    inset opx 0px 0px 0.5px rgba(246, 235, 235, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  border: 1px solid;
  border-color: rgba(246, 235, 235);
  padding: 20px;
  position: absolute;
  top: 120px;
  right: 30px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  transition: 0.3s ease-in-out;
  /* display: ${(props) => (props.isOpen ? "block" : "none")}; */
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen
      ? "skewY(0deg) rotate(0deg) translateY(0px)"
      : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
