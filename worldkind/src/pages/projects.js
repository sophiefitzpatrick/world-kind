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

export default function About({ location }) {
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
            url={modalConfigs[i].url}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )
      }
    }
  }
  return (
    <>
      <Navigation currentPage={location.pathname} />
      <Layout>
        <MaxWidth width={65}>
          <Heading size="3rem">Ocean Conservation</Heading>
        </MaxWidth>
        <MaxWidth width={60}>
          <Paragraph>
            We've highlighted a few key projects and why we like what they do.
            Helping you to easily donate to a cause of your choice.
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
