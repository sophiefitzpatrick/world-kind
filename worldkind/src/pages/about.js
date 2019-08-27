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
  padding: 80px 0 0 10%;
  display: grid;
  grid-template-columns: 55% 45%;
  background-color: #131515;
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
      <div
        style={{
          backgroundColor: "#225358",
          color: "white",
          height: "350px",
          width: "100%",
          margin: 0,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          paddingLeft: "10%",
        }}
      >
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
      </div>
    </>
  )
}
