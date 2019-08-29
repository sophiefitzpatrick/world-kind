import React from "react"
import styled from "styled-components"

import Heading from "../components/Heading"
import Image from "../components/Image"
import Navigation from "../components/Navigation"
import Paragraph from "../components/Paragraph"
import MaxWidth from "../components/MaxWidth"

import Ocean from "../media/images/illustrations/4ocean.jpg"
import Turtle from "../media/images/illustrations/sea-turtles.jpg"
import World from "../media/images/illustrations/logo-200.png"

const Hero = styled.div`
  width: 100%;
  height: 600px;
  padding: 80px 0 0 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: ${props => props.backgroundColor || "white"};

  @media (max-width: 500px) {
    padding: 80px 0 0 0;
  }
`

const LeftColumn = styled.div`
  min-height: 250px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 10%;
  }
`

const FullWidthColumn = styled.div`
  background-color: #225358;
  color: white;
  height: 350px;

  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0 10%;
`

const FiveRowsOneColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(5, 20%);
  grid-row-gap: 1em;
`

const ThreeRowsOneColumn = styled.div`
  width: 100%;
  height: 800px;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
`

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 10%;
  color: #225358;
  padding: 10%;
  height: max-content;
`

export default function Homepage() {
  const windowLocation = window.location.href.split("/")
  return (
    <div style={{ overflow: "hidden" }}>
      <Navigation currentPage={windowLocation[3]} />
      <Hero backgroundColor="#131515">
        <LeftColumn>
          <MaxWidth width="80">
            <Heading size="3rem" color="white" align="left">
              WorldKind.
            </Heading>
            <Paragraph color="white">
              Every year 1.4 billion pounds of rubbish enters the ocean,
              this impacts our health, ecoystems and economies.
            </Paragraph>
          </MaxWidth>
        </LeftColumn>
        <Image
          src={Turtle}
          width="100%"
          height="100%"
          style={{ minHeight: "250px" }}
        />
      </Hero>
      <FullWidthColumn>
        <Heading size="3rem" color="white" align="left" style={{ margin: 0 }}>
          Our Mission
        </Heading>
        <Paragraph color="white">
          We want to enable small actions that have a large impact on environmental issues by providing knowledge on organisations driving change. 
        </Paragraph>
      </FullWidthColumn>
      <InfoSection>
        <FiveRowsOneColumn>
          <Heading size="3rem" align="left" style={{ margin: 0 }}>
            Key Facts
          </Heading>
          <Paragraph>
            Ocean pollution kills 100,00 marine mammals and 1 million seabirds every year.
          </Paragraph>
          <Paragraph>
            By 2050 there will be more plastic in the ocean than fish.
          </Paragraph>
          <Paragraph>
            Plastic pollution causes $13 billion in damage to marine ecosystems every year.
          </Paragraph>
          <Paragraph>
            Chemical pollution can cause a range of health issues including reproductive and nervous system damage.
          </Paragraph>
        </FiveRowsOneColumn>
        <ThreeRowsOneColumn>
          <Image
            src={Ocean}
            height="100%"
            width="100%"
            style={{
              justifySelf: "end",
            }}
          />
          <Image
            src={World}
            height="100%"
            width="100%"
            style={{
              justifySelf: "end",
            }}
          />
          <Image
            src={Turtle}
            height="100%"
            width="100%"
            style={{ justifySelf: "end" }}
          />
        </ThreeRowsOneColumn>
      </InfoSection>
      <FullWidthColumn>
        <Heading size="3rem" color="white" align="left" style={{ margin: 0 }}>
          The WorldKind Team
        </Heading>
        <div style={{ color: "white" }}></div>
      </FullWidthColumn>
    </div>
  )
}
