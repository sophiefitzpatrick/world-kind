import React from "react"

import Image from "../components/Image"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import MaxWidth from "../components/MaxWidth"
import LandingEarth from "../media/gifs/landing-earth-sparkles.gif"

export default function Homepage() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <MaxWidth width={50}>
        <Heading size="4rem">WorldKind</Heading>
        <Heading size="2rem">Empowering big impact with small actions</Heading>
      </MaxWidth>
      <a href="/about">
        <Image src={LandingEarth} alt="" />
      </a>
    </Layout>
  )
}
