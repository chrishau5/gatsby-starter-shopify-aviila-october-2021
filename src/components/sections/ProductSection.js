import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";
import AddToCartButton from "../buttons/AddToCartButton";
import ApplePay from "../buttons/ApplePay";

function ProductSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>Shorts</Title>
          <Description>
            This is the best shorts page ever.
            <br /> <br />
            You will see a blurb about our shorts and then be able to deep dive
            into them.
          </Description>
          <MobilePaymentGrouping>
            <AddToCartButton />
            <ApplePay />
          </MobilePaymentGrouping>
          <Link to="/p2_shorts/">Shorts</Link>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default ProductSection;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  /* background: linear-gradient(to bottom right, #d3ff59 0%, #ef6cce 100%); */
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
`;

const TextWrapper = styled.div`
  max-width: 375px;
  display: grid;
  gap: 30px;
  /* margin: 0px 6px; */
`;

const Title = styled(H1)``;

const Description = styled(MediumText)`
  margin: 0px 12px;
`;

const MobilePaymentGrouping = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
