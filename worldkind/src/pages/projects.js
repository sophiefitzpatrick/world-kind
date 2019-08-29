import React, { useState } from "react"

import Card from "../components/Card"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Heading from "../components/Heading"
import MaxWidth from "../components/MaxWidth"
import Navigation from "../components/Navigation"
import Modal from "../components/Modal"
import Paragraph from "../components/Paragraph"

import cardConfigs from "../configs/cardCharityInfo"
import modalConfigs from "../configs/modalCharityInfo"

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState("")

  const openCorrectModal = currentlyOpenModal => {
    for (let i = 0; i < modalConfigs.length; i++) {
      if (currentlyOpenModal === modalConfigs[i].title) {
        return (
          <Modal
            description={modalConfigs[i].description}
            title={modalConfigs[i].title}
            image={modalConfigs[i].image}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )
      }
    }
  }

  return (
    <>
      <Navigation />
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
            There are tons of organisations working to clean up our oceans and
            for those who are able, donating money is a great way of supporting
            these efforts. But there are a lot of organisations and it can be
            difficult to know who to support without a lot of research.
          </Paragraph>
        </MaxWidth>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {cardConfigs.map(card => {
            return (
              <Card
                key={card.title}
                onClick={() => {
                  setCurrentlyOpenModal(card.title)
                  setIsModalOpen(true)
                }}
              >
                <Image width="100%" height="250px" src={card.image}></Image>
                <div style={{ padding: "1rem 1.5rem" }}>
                  <Heading size="1.7em">{card.title}</Heading>
                  <Paragraph align="center">{card.description}</Paragraph>
                </div>
              </Card>
            )
          })}
          {isModalOpen && openCorrectModal(currentlyOpenModal)}
        </div>
      </Layout>
    </>
  )
}
