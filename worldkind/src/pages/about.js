import React, { useState } from "react"

import Card from "../components/Card"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Heading from "../components/Heading"
import MaxWidth from "../components/MaxWidth"
import Modal from "../components/Modal"
import Paragraph from "../components/Paragraph"

import configs from "../configs/charityInformation"

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState("")
  let cardTitle
  const openSpecificModal = currentlyOpenModal === cardTitle

  const modalConfig = [{ title: "Plastic Oceans" }, { title: "Hello" }]
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {configs.map(card => {
          cardTitle = card.title
          return (
            <Card
              id={card.title}
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              <Image width="100%" height="250px" src={card.image}></Image>
              <div style={{ padding: "1rem 1.5rem" }}>
                <Heading size="1.7em">{card.title}</Heading>
                <Paragraph align="center">{card.description}</Paragraph>
              </div>
              {/*  if the modal had the same title as the card just clicked, open that modal  */}
            </Card>
          )
        })}
        {modalConfig.map(modal => {
          if (modal.title === cardTitle && isModalOpen) {
            return (
              <Modal
                title={modal.title}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            )
          }
        })}
      </div>
    </Layout>
  )
}
