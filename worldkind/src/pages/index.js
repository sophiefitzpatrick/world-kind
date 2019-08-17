import React from "react"
import styled, { css } from "styled-components"
import ReactModal from "react-modal"

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
  ${props =>
    props.backgroundColor &&
    css`
      background-color: pink;
    `};
`

// either useState or use props to open / close the modal
export default function Homepage() {
  // ReactModal.setAppElement(el)
  return (
    <Layout>
      <Nav text="World Kind" />
      <ReactModal
        isOpen={true}
        onRequestClose={() => {}}
        contentLabel="Information Modal about <insert name here>"
        overlayClassName={styles.content_overlay}
        className={styles.content_body}
      >
        <FeaturedImageCol backgroundColor>
          <Image src={World} alt="illustration of humans on top of earth" />
        </FeaturedImageCol>
        <div style={{ width: "50%" }}>HELLO 2</div>
      </ReactModal>

      <Image src={World} alt="" />
    </Layout>
  )
}
