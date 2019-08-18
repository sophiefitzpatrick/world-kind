import React, { useState } from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

import CloseIcon from "../components/Icons/CloseIcon"
import Layout from "../components/Layout"
import Nav from "../components/Navigation"
import World from "../media/images/world.jpg"

import styles from "./styles/modalstyles.module.css"

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 20%;
`
const FeaturedImageCol = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : `white`};

  @media (max-width: 760px) {
    height: 50%;
    width: 100%;
    padding: 10%;
  }
`
const FeatureInformationCol = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;

  @media (max-width: 760px) {
    height: 50%;
    width: 100%;
  }
`

const ColumnWrap = styled.div`
  padding: 10%;
  width: 100%;
  height: 100%;
`
const Paragraph = styled.p`
  font-size: 1.25rem;
  color: #0a132b;
  font-family: Montserrat;
`
const ColumnHeading = styled.h1`
  font-size: 3rem;
  color: #0a132b;
  font-family: Montserrat;
`

const CloseButton = styled.button`
  width: 100%;
  border: none;
  background-color: white;
  margin-top: -1rem;
  margin-right: -1rem;
  display: flex;
  justify-content: flex-end;
  outline: none;
  cursor: pointer;
`

export default function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Layout>
      <Nav text="World Kind" />
      <Image
        src={World}
        alt=""
        onClick={() => {
          setIsModalOpen(true)
        }}
      />
      <ReactModal
        isOpen={isModalOpen}
        // onRequestClose={() => {}} << this will handle the transition
        contentLabel="Information Modal about <insert name here>"
        overlayClassName={styles.content_overlay}
        className={styles.content_body}
      >
        <FeaturedImageCol backgroundColor="#4FB0C6">
          <Image src={World} alt="illustration of humans on top of earth" />
        </FeaturedImageCol>
        <FeatureInformationCol>
          <ColumnWrap>
            <CloseButton
              onClick={() => {
                setIsModalOpen(false)
              }}
            >
              <CloseIcon />
            </CloseButton>

            <ColumnHeading>Name of Charity</ColumnHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              harum nobis doloribus culpa tempore ratione atque accusantium
              magni delectus, tempora dolorem, exercitationem deserunt quasi
              quidem et vero. Id, aliquam enim!
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              harum nobis doloribus culpa tempore ratione atque accusantium
              magni delectus, tempora dolorem, exercitationem deserunt quasi
              quidem et vero. Id, aliquam enim! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ipsa, velit iusto.
            </Paragraph>
          </ColumnWrap>
        </FeatureInformationCol>
      </ReactModal>
    </Layout>
  )
}
