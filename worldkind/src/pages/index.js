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

import Alaina from "../media/avatars/alaina.jpg"
import Aisling from "../media/avatars/aisling.png"
import Charlotte from "../media/avatars/charlotte.jpeg"
import Rachel from "../media/avatars/rachel.png"
import Sophie from "../media/avatars/sophie.png"

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
  min-height: 350px;
  height: max-content;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default function Homepage({ location }) {
  const worldKindTeam = [
    { name: "Charlotte Hall", twitter: "@ch_hall", avatar: Charlotte },
    { name: "Aisling Porceddu", twitter: "@aislingporceddu", avatar: Aisling },
    { name: "Rachel Franklin", twitter: "@tobequitefrank1", avatar: Rachel },
    { name: "Jane Adojutelegan", twitter: "J_Adojutelegan", avatar: Aisling },
    { name: "Beth Gill", twitter: "@Bethany_Gill98", avatar: Rachel },
    { name: "Alaina Badar", dribble: "@alainarobert", avatar: Alaina },
    { name: "Sophie Fitzpatrick", twitter: "@srfitzpatrick_", avatar: Sophie },
  ]
  return (
    <div style={{ overflow: "hidden" }}>
      <Navigation currentPage={location.pathname} />
      <Hero backgroundColor="#131515">
        <LeftColumn>
          <MaxWidth width="80">
            <Heading size="3rem" color="white" align="left">
              WorldKind.
            </Heading>
            <Paragraph color="white">
              Every year 1.4 billion pounds of rubbish enters the ocean, this
              impacts our health, ecoystems and economies.
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
          We want to enable small actions that have a large impact on
          environmental issues by providing knowledge on organisations driving
          change.
        </Paragraph>
      </FullWidthColumn>
      <InfoSection>
        <FiveRowsOneColumn>
          <Heading size="3rem" align="left" style={{ margin: 0 }}>
            Key Facts
          </Heading>
          <Paragraph>
            Ocean pollution kills 100,00 marine mammals and 1 million seabirds
            every year.
          </Paragraph>
          <Paragraph>
            By 2050 there will be more plastic in the ocean than fish.
          </Paragraph>
          <Paragraph>
            Plastic pollution causes $13 billion in damage to marine ecosystems
            every year.
          </Paragraph>
          <Paragraph>
            Chemical pollution can cause a range of health issues including
            reproductive and nervous system damage.
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
        <div style={{ padding: "5% 0" }}>
          <Heading
            size="3rem"
            color="white"
            align="center"
            style={{ margin: 0 }}
          >
            The WorldKind Team
          </Heading>
        </div>
        <div
          style={{
            color: "white",
            width: "100%",
            height: "max-content",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            marginBottom: "5%",
          }}
        >
          {worldKindTeam.map(person => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                margin: "5% 0",
              }}
            >
              <Image width="100px" height="100px" src={person.avatar} />
              <Paragraph color="white">{person.name}</Paragraph>
              <Paragraph color="white" size="0.8rem" style={{ margin: 0 }}>
                {person.twitter || person.dribble}
              </Paragraph>
            </div>
          ))}
        </div>
      </FullWidthColumn>
    </div>
  )
}
