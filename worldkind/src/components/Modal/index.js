import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

import CloseIcon from "../Icons/CloseIcon"
import ColumnHeading from "../Heading"
import Image from "../Image"
import Paragraph from "../Paragraph"

import styles from "./styles/modalstyles.module.css"

const FeaturedImageCol = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : `white`};

  @media (max-width: 760px) {
    height: 100%;
    width: 100%;
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

const Button = styled.button`
  width: max-content;
  min-height: 50px
  height: max-content;
  background-color: #FFAA63;
  border: none;
  cursor: pointer;
  

  :hover {
    box-shadow: 0 20px 50px 0 rgba(12, 16, 20, 0.1);
    
    transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
  }
`

export default function Modal({
  isModalOpen,
  setIsModalOpen,
  title,
  description,
  image,
  url,
}) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={() => {
        setIsModalOpen(false)
      }}
      // ^^ this will also handle the transition
      contentLabel="Information Modal about ocean cleaning charities"
      overlayClassName={styles.content_overlay}
      className={styles.content_body}
    >
      <FeaturedImageCol>
        <Image
          src={image}
          alt="illustration of humans on top of earth"
          style={{ width: "100%", height: "100%" }}
        />
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
          <Button>
            <a
              href={url}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragraph size="1rem">Check out {title}</Paragraph>
            </a>
          </Button>
        </ColumnWrap>
      </FeatureInformationCol>
    </ReactModal>
  )
}
