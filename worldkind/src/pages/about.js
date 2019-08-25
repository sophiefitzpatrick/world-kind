import React, { useState } from "react"

import Card from "../components/Card"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Heading from "../components/Heading"
import MaxWidth from "../components/MaxWidth"
import Modal from "../components/Modal"
import Paragraph from "../components/Paragraph"
import World from "../media/images/world.jpg"
import configs from "../configs/charityInformation"

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentlyOpenModal, setCurrentlyOpenModal] = useState("")

  // const openSpecificModal = currentlyOpenModal === cardTitle

  const modalConfig = [{ title: "Hello" }, { title: "Plastic Oceans" }]

  const openCorrectModal = currentlyOpenModal => {
    for (let i = 0; i < modalConfig.length; i++) {
      if (currentlyOpenModal === modalConfig[i].title) {
        return (
          <Modal
            title={modalConfig[i].title}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )
      }
    }
  }

  return (
    <>
      <ul
        style={{
          backgroundColor: "white",
          height: "90px",
          listStyle: "none",
          display: "grid",
          gridTemplateColumns: "50px 1fr 1fr 1fr 1fr",
          width: "100%",
        }}
      >
        <li>
          <Image height="90px" src={World}></Image>
        </li>
        <li
          style={{
            color: "#225358",
            fontWeight: "700",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          <p>Home</p>
        </li>
        <li
          style={{
            backgroundColor: "#225358",
            color: "white",
            fontWeight: "700",
            fontSize: "25px",
            textAlign: "center",
          }}
        >
          <p>Projects</p>
        </li>
        <li
          style={{ fontWeight: "700", fontSize: "25px", textAlign: "center" }}
        >
          <p>What we do</p>
        </li>
        <li
          style={{ fontWeight: "700", fontSize: "25px", textAlign: "center" }}
        >
          <p>Blog</p>
        </li>
      </ul>
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
          {configs.map(card => {
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
                {/*  if the modal had the same title as the card just clicked, open that modal  */}
              </Card>
            )
          })}
          {isModalOpen && openCorrectModal(currentlyOpenModal)}
        </div>
      </Layout>
    </>
  )
}

// nested forLoop => onClick, trigger a forLoop to loop over the modals and return the one modal that matches that card
