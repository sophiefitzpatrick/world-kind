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
  border-radius: 20%;
`
const FeaturedImageCol = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : `white`};
`
const FeatureInformationCol = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`

const ColumnWrap = styled.div`
  padding: 10%;
  width: 100%;
  height: 100%;
  font-family: Montserrat;
`
const Paragraph = styled.p`
  font-size: 1.25rem;
  color: #0a132b;
  font-family: Montserrat;
`
const ColumnHeading = styled.h1`
  font-size: 3rem;
  color: #0a132b;
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
        <FeaturedImageCol backgroundColor="#4FB0C6">
          <Image src={World} alt="illustration of humans on top of earth" />
        </FeaturedImageCol>
        <FeatureInformationCol>
          <ColumnWrap>
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

      <Image src={World} alt="" />
    </Layout>
  )
}
