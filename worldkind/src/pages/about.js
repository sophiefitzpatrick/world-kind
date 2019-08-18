import React, { useState } from "react"

import Layout from "../components/Layout"
import Heading from "../components/Heading"
import MaxWidth from "../components/MaxWidth"
import Modal from "../components/Modal"
import Paragraph from "../components/Paragraph"

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <MaxWidth width={65}>
        <Heading size="3rem">We are WorldKind.</Heading>
      </MaxWidth>
      <MaxWidth width={60}>
        <Paragraph>
          Every year 1.4 billion pounds of rubbish enters the ocean, resulting
          in the deaths on 100,000 sea mammals.
        </Paragraph>
        <Paragraph>
          There are tons of organisations working to clean up our oceans and for
          those who are able, donating money is a great way of supporting these
          efforts. But there are a lot of organisations and it can be difficult
          to know who to support without a lot of research.
        </Paragraph>
      </MaxWidth>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "#FFAA63",
            width: "250px",
            height: "250px",
            marginRight: "10px",
          }}
        >
          <Paragraph>I am a card, click me to open the modal</Paragraph>
        </div>
        <div
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "#FFAA63",
            width: "250px",
            height: "250px",
            marginRight: "10px",
          }}
        ></div>
        <div
          onClick={() => setIsModalOpen(true)}
          style={{
            backgroundColor: "#FFAA63",
            width: "250px",
            height: "250px",
          }}
        ></div>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </Layout>
  )
}
