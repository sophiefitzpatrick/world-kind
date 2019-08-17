import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"

import Layout from "../components/Layout"
import Nav from "../components/Navigation"
import World from "../media/images/world.jpg"

import styles from "./styles/modalstyles.module.css"

const Image = styled.img`
  width: 200px;
  height: 200px;
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
        // style={{
        //   overlay: { backgroundColor: "pink" }, // what happens to the page when modal is open
        //   content: { backgroundColor: "red", opacity: "0.5" },
        // }}
        className={styles.content_body}
      />

      <Image src={World} alt="" />
    </Layout>
  )
}
