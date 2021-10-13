import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export default function MenuButton(props) {
  const { item } = props;
  return (
    <Link to={item.link}>
      <MenuItem title={item.title}>{item.title}</MenuItem>
    </Link>
  );
}

const MenuItem = styled.div`
  color: #f6ebeb;
  padding: 10px;
  transition: 0.5s ease-out;
  border-radius: 10px;
  gap: ${(props) => (props.title ? "10px" : "0px")};

  :hover {
    background: rgb(246, 235, 235, 0.1);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
      inset 0px 0px 0px 0.5px rgba(246, 235, 235 0.2);
  }
`;
