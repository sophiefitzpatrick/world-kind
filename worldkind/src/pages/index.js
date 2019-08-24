import React from "react"

import Image from "../components/Image"
import Layout from "../components/Layout"
import Heading from "../components/Heading"

import LandingEarth from "../media/gifs/landing-earth-sparkles.gif"

export default function Homepage() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <Heading as="h1" size="4rem">
        WorldKind
      </Heading>
      <Heading as="h1" size="2rem">
        Empowering big impact with small actions
      </Heading>

      <a href="/about">
        <Image src={LandingEarth} alt="" />
      </a>
    </Layout>
  )
}
