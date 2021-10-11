import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const OutlinePage = () => (
  <main>
    <PageWrapper>
      <SideLogoWrapper>
        <SideLogo>AVIILA</SideLogo>
      </SideLogoWrapper>
      <IntroPage>
        <ContentWrapper>
          <Title>
            Opulence <br />
            <Subtitle>Meets Comfort</Subtitle>
          </Title>
          <Paragraph>
            Inspired by the Miami lifestyle, our premium apparel bridges the gap
            between luxury and leisure. Representing those who possess that work
            hard, play hard mentality, we understand you are at your best when
            you look your best. Whether you are at the gym, running errands or
            at the club, our mission remains the same: keep you comfortable
            without sacrificing style.
          </Paragraph>
        </ContentWrapper>
        <Social className="social">
          <li>
            <a href="https://www.instagram.com/aviila_apparel/">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AviilaApparel/">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aviila_apparel">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="" />
            </a>
          </li>
        </Social>
      </IntroPage>
      <VideoPage>
        <section className="video-wrapper">
          <p>Video Placeholder</p>
        </section>
      </VideoPage>
      <DayPage className="day-night-page">
        <ContentWrapper>
          <Title>
            Day
            <br />
            <Subtitle>and Night</Subtitle>
          </Title>
          <Paragraph>
            We have carefully crafted our collection to represent you at all
            hours, as you transition from daytime function to nighttime fashion.
            However, we did not set out to design "all-in-one" athleisure
            products that others boast of today, rather, we believe there is a
            time and place for each of our different styles. Our cohesive
            product mix includes distinct pieces to be worn in specific settings
            throughout your waking hours to ensure that you are never
            underdressed in the name of versatility.
          </Paragraph>
        </ContentWrapper>
        <DayWrapper>
          <Card>
            <h6>Morning Workout</h6>
            <p></p>
          </Card>
          <Card>
            <h6>
              Closing
              <br />
              Deals
            </h6>
            <p></p>
          </Card>
          <Card>
            <h6>
              Max
              <br />
              Luxuriation
            </h6>
            <p></p>
          </Card>
          <Card>
            <h6>
              Happy
              <br />
              Hour
            </h6>
            <p></p>
          </Card>
          <Card>
            <h6>
              Lit
              <br />
              Nightlife
            </h6>
            <p></p>
          </Card>
        </DayWrapper>
      </DayPage>
      <FinestPage>
        <ContentWrapper>
          <Title>
            Only
            <br />
            <Subtitle>the Finest</Subtitle>
          </Title>
          <Paragraph>
            Each piece of our collection is constructed using hand-selected,
            custom fabric sourced specifically to endure your active lifestyle.
            Due to its premium material constitution, and utilizing cutting-edge
            manufacturing technology, AVIILA apparel is able to maintain its
            integrity, while remaining breathable and soft to the touch. All of
            our products are designed to display a luxurious aesthetic, with
            superior comfort top of mind.
          </Paragraph>
        </ContentWrapper>
        <DayWrapper>
          <Card>
            <h6>Hand Selected Fabrics</h6>
            <p></p>
          </Card>
          <Card>
            <h6>Thoughtful Design</h6>
            <p></p>
          </Card>
          <Card>
            <h6>Cutting-Edge Manufacturing</h6>
            <p></p>
          </Card>
        </DayWrapper>
      </FinestPage>
    </PageWrapper>
  </main>
)

const PageWrapper = styled.div``

const IntroPage = styled.section`
  min-height: 100%;
  position: relative;
  width: 100%;
  padding-top: 100px;
  padding-right: 100px;
  padding-bottom: 423.6px;
  padding-left: 100px;
`

const ContentWrapper = styled.article`
  max-width: 700px;
`

const Title = styled.h1`
  line-height: 0.8;
  font-weight: var(--medium);
  max-width: 550px;
  margin-left: -15px;
`
const Subtitle = styled.span`
  font-size: var(--text-h2);
  line-height: 0.6;
  word-spacing: -0.2em;
  margin-left: 6px;
`

const Paragraph = styled.p`
  margin: 35px 0;
`
const VideoPage = styled.section`
  height: 40vh;
  border: 4px dotted var(--red);
  background: var(--red-31);
`

const SideLogoWrapper = styled.div`
  /* height: 100%; */
  color: var(--light-fade-80);
`

const SideLogo = styled.div`
  position: fixed;
  writing-mode: vertical-rl;
  top: 17%;
  right: 0;
  transform: rotate(180deg);
  font-size: 4rem;
  letter-spacing: 0.32em;
  text-align: center;
  line-height: 100%;
  font-family: var(--font-header);
`

const DayPage = styled.section`
  min-height: 100%;
  background: linear-gradient(
    180deg,
    #0c0c0e 10.78%,
    #263a73 48.29%,
    rgba(38, 58, 115, 0.81) 72.38%,
    rgba(38, 58, 115, 0.94) 85%,
    #0c0c0e 96.12%
  );
  margin-top: 261.8px;
  padding-left: 100px;
  padding-right: 100px;
`

const DayWrapper = styled.section`
  margin-top: 220px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: start;
  column-gap: 4%;
  row-gap: 50px;
  padding-bottom: 423.6px;
`
const Card = styled.article`
  display: grid;
  grid-template-columns: 172.8px;
  grid-template-rows: 172.8px 106.24px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  align-items: center;
  justify-items: center;
  text-align: center;
`

const FinestPage = styled.section`
  margin-top: 261.8px;
  padding-left: 100px;
  padding-right: 100px;
`

const Social = styled.ul`
  position: absolute;
  bottom: 30px;
  z-index: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & li {
    list-style: none;
    & a {
      display: inline-block;
      filter: invert(1);
      margin-right: 25px;
      transform: scale(0.7);
      transition: 0.7s;
      &:hover {
        transform: scale(0.5) translateY(-15px);
      }
    }
  }
`

export default OutlinePage
