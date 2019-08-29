import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

import CloseIcon from "../Icons/CloseIcon"
import ColumnHeading from "../Heading"
import Image from "../Image"
import Paragraph from "../Paragraph"
import World from "../../media/images/illustrations/world.jpg"

import styles from "./styles/modalstyles.module.css"

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

export default function Modal({
  isModalOpen,
  setIsModalOpen,
  title,
  description,
}) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false)
      }}
      // ^^ this will also handle the transition
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

          <ColumnHeading size="3rem">{title}</ColumnHeading>
          <Paragraph>{description}</Paragraph>
        </ColumnWrap>
      </FeatureInformationCol>
    </ReactModal>
  )
}
