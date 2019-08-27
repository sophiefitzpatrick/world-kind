import React from "react"
import styled from "styled-components"

import Heading from "../components/Heading"
import Image from "../components/Image"
import Navigation from "../components/Navigation"
import Paragraph from "../components/Paragraph"
import MaxWidth from "../components/MaxWidth"

import Ocean from "../media/images/4ocean.jpg"
import Turtle from "../media/images/turtle.jpg"
import World from "../media/images/world.jpg"

const Hero = styled.div`
  width: 100%;
  height: 600px;
  padding: 80px 0 0 10%;
  display: grid;
  grid-template-columns: 55% 45%;
  background-color: ${props => props.backgroundColor || "white"};
`

const LeftColumn = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FullWidthColumn = styled.div`
  background-color: #225358;
  color: white;
  height: 350px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10%;
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
  grid-template-rows: 1fr 1fr fr;
`

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  color: #225358;
  padding: 10%;
  height: max-content;
`

export default function Homepage() {
  return (
    <>
      <Navigation />
      <Hero backgroundColor="#131515">
        <LeftColumn>
          <MaxWidth width="60">
            <Heading size="3rem" color="white" align="left">
              WorldKind.
            </Heading>
            <Paragraph color="white">
              Every year 1.4 billion pounds of rubbish enters the ocean,
              resulting in the deaths on 100,000 sea mammals.
            </Paragraph>
          </MaxWidth>
        </LeftColumn>
        <Image src={Turtle} width="100%" height="100%" />
      </Hero>
      <FullWidthColumn>
        <MaxWidth width="80">
          <Heading size="3rem" color="white" align="left" style={{ margin: 0 }}>
            Our Mission
          </Heading>
          <Paragraph color="white">
            More in depth sentences based on what we are trying to do and why
            people should use our page! This probably only needs to be two or
            three lines long
          </Paragraph>
        </MaxWidth>
      </FullWidthColumn>
      <InfoSection>
        <FiveRowsOneColumn>
          <Heading size="3rem" align="left" style={{ margin: 0 }}>
            Facts
          </Heading>
          <Paragraph>
            Shocking facts to help show that this is a cause worth peoples
            attention
          </Paragraph>
          <Paragraph>
            More facts that are surprising can be listed here
          </Paragraph>
          <Paragraph>
            Oh wow that is shocking! I defo want to donate some money to a great
            charity
          </Paragraph>
          <Paragraph>
            Last fact that shows our cause can be written here
          </Paragraph>
        </FiveRowsOneColumn>
        <ThreeRowsOneColumn>
          <Image
            src={Ocean}
            height="100%"
            width="60%"
            style={{
              justifySelf: "end",
            }}
          />
          <Image
            src={World}
            height="100%"
            width="60%"
            style={{
              justifySelf: "end",
            }}
          />
          <Image
            src={Turtle}
            height="100%"
            width="60%"
            style={{ justifySelf: "end" }}
          />
        </ThreeRowsOneColumn>
      </InfoSection>
    </>
  )
}
