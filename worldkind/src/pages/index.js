import React from "react"
import styled from "styled-components"

import Image from "../components/Image"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import LandingEarth from "../media/gifs/landing-earth-sparkles.gif"

const MaxWidth = styled.div`
  max-width: 50%;
`

export default function Homepage() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <MaxWidth>
        <Heading size="4rem">WorldKind</Heading>
        <Heading size="2rem">Empowering big impact with small actions</Heading>
      </MaxWidth>
      <a href="/about">
        <Image src={LandingEarth} alt="" />
      </a>
    </Layout>
  )
}
