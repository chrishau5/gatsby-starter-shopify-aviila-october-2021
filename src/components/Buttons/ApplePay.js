import React from "react";
import styled from "styled-components";

export default function ApplePay() {
  return (
    <Wrapper>
      <img src="/images/applepay.svg" alt="applepay" />
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
  order: 0;
  margin: 0px 5.5px;

  background: #ffffff;
  border-radius: 4px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5),
    -5px -5px 10px rgba(255, 255, 255, 0.05);

  width: 170px;
  height: 40.13px;
`;
