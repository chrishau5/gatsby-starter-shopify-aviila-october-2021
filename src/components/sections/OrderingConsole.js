import React from "react";
import styled from "styled-components";
import { H6Mon } from "../styles/TextStyles";

const OrderingConsole = () => {
  return (
    <Container>
      <LinerComponent>
        <LinerLabel>Liner</LinerLabel>
      </LinerComponent>
    </Container>
  );
};

export default OrderingConsole;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 11px 7px;

  background: rgba(12, 12, 14, 0.98);
  box-shadow: 0px 0px 10px 5px rgba(221, 252, 116, 0.3);
  border-radius: 10px;
`;

const LinerComponent = styled.div`
  width: 317.5px;
  height: 53px;
  left: 6.5px;
  top: 11px;
  display: flex;
  flex-direction: row;
`;

const LinerLabel = styled(H6Mon)``;
