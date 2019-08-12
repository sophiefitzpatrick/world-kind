import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Modal from "../components/Modal"
import Nav from "../components/Navigation"
import World from "../media/images/world.jpg"

const Image = styled.img`
  width: 200px;
  height: 200px;
`

export default () => (
  <Layout>
    <Nav text="World Kind" />
    <Modal />
    <Image src={World} alt="" />
  </Layout>
)
