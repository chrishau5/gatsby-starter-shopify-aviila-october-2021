import React from "react";
import styled from "styled-components";

const StatePlayground = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Jam>
        <Banner>Welcome to the State Playground!</Banner>
      </Jam>
    </section>
  );
};

export default StatePlayground;

const Jam = styled.div`
  margin: 0;
  padding: 20px;
  width: 400px;
  gap: 30px;
`;

const Banner = styled.div`
  color: "#f6ebeb";
`;
