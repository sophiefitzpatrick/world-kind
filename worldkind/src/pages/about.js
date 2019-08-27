import React from "react"
import styled from "styled-components"

import Heading from "../components/Heading"
import Image from "../components/Image"
import Navigation from "../components/Navigation"
import Paragraph from "../components/Paragraph"
import MaxWidth from "../components/MaxWidth"

import Turtle from "../media/images/turtle.jpg"

const Hero = styled.div`
  width: 100%;
  height: 600px;
  padding: 80px 0;
  display: grid;
  grid-template-columns: 60% 40%;
`

export default function Homepage() {
  return (
    <>
      <Navigation />

      <Hero>
        <div
          style={{
            height: "100%",
            width: "100%",
            color: "white",
            backgroundColor: "#131515",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaxWidth width="60">
            <Heading size="3rem" color="white" align="left">
              WorldKind.
            </Heading>
            <Paragraph color="white">
              Every year 1.4 billion pounds of rubbish enters the ocean,
              resulting in the deaths on 100,000 sea mammals.
            </Paragraph>
          </MaxWidth>
        </div>
        <Image
          src={Turtle}
          style={{ height: "100%", width: "100%", color: "white" }}
        />
      </Hero>
    </>
  )
}
