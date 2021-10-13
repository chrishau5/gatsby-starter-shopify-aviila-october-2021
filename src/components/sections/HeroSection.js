import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";
import AddToCartButton from "../buttons/AddToCartButton";
import ApplePay from "../buttons/ApplePay";
// import WaveBackground from "../backgrounds/WaveBackground";

function HeroSection() {
  return (
    <Wrapper>
      {/* <WaveBackground /> */}
      <ContentWrapper>
        <TextWrapper>
          <Title>Maintain Control</Title>
          <Description>
            Gentlemen, we're entering a new era of quality men's Activewear.
            With alpha masculinity at our core, AVIILA is on a course to equipt
            you, the modern man, with a line of all-purpose male-focused
            athleisure products. Gather your shorts made by your girlfriend's
            yoga brand and toss them aside. We're taking the power back.
            <br /> <br />
            All systems go on the functionality, style, and comfortable design
            of our versatile debut collection. We can't wait to see what we
            accomplish together. Godspeed.
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

export default HeroSection;

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

const Title = styled(H1)`
  @media (max-width: 450px) {
    font-size: 60px;
  }
`;

const Description = styled(MediumText)`
  margin: 0px 12px;
`;

const MobilePaymentGrouping = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
