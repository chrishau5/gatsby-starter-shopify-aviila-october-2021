import React from "react";
import styled from "styled-components";

export default function AddToCartButton(props) {
  const { title } = props;
  return (
    <Wrapper>
      <Title>{title || "Add to Cart"}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 10px;
  order: 1;
  margin: 0px 5.5px;

  background: #ff495c;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5),
    -5px -5px 10px rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  width: 170px;
  height: 40.13px;
`;

const Title = styled.p`
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  /* or 18px */
  display: flex;
`;
