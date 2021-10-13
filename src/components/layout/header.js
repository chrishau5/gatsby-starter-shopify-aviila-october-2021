import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "../data/menuData"
import { H4 } from "../../styles/TextStyles"
import MenuTooltip from "../tooltips/MenuTooltip"
import { StoreContext } from "../context/StoreContext"
import MenuButton from "../Buttons/MenuButton.js"
import MenuIconButton from "../Buttons/MenuIconButton.js"

const menuIconData = [
  {
    title: "AVIILA Shopping Cart",
    icon: "/images/icons/Shopping_Cart.svg",
    link: "/p5_pullovers",
    height: "25",
  },
  {
    title: "AVIILA Account",
    icon: "/images/icons/account.svg",
    link: "/account",
    height: "25",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { isCartOpen, addProductToCart } = useContext(StoreContext)

  function handleClick(event) {
    setIsOpen(!isOpen)
    event.preventDefault()
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/" alt="Aviila Men's Activewear Shop">
          AVIILA
        </Link>
      </LogoWrapper>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) => (
          <MenuButton key={index} item={item} />
        ))}
      </MenuWrapper>
      <IconWrapper count={menuIconData.length}>
        {menuIconData.map((item, index) =>
          item.link === "/account" ? (
            <MenuIconButton
              item={item}
              key={index}
              onClick={(event) => handleClick(event)}
            />
          ) : (
            <MenuIconButton
              item={item}
              key={index}
              onClick={addProductToCart}
            />
          )
        )}
        <HamburgerWrapper>
          <MenuIconButton
            item={{
              title: "",
              icon: "/images/icons/Hamburger_Menu.svg",
              height: "42",
              width: "46",
            }}
          />
        </HamburgerWrapper>
      </IconWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const LogoWrapper = styled.div`
  color: #f6ebeb;
  align-items: center;
  padding: 10px;
  transition: 0.5s ease-out;
  font-size: var(--text-h4);
  font-family: Ailerons;
  width: 142px;

  :hover {
    opacity: 50%;
  }
`

const Wrapper = styled.div`
  position: fixed;
  height: 110px;
  z-index: 1;
  display: grid;
  grid-template-columns: 142px auto auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
  background-color: #0c0c0e;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
  @media (max-width: 450px) {
    padding: 0 20px;
    padding-top: 20px;
  }
`

const MenuWrapper = styled(H4)`
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, auto);
  gap: 30px;
  align-items: center;
  letter-spacing: -0.025em;

  @media (max-width: 1000px) {
    > a {
      display: none;
    }
  }
`

const IconWrapper = styled(H4)`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 40px;
  align-items: center;

  @media (max-width: 1000px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
  }
`
