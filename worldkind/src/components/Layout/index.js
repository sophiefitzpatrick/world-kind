import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 5%;

  @media (max-width: 780px) {
    padding: 80px 5px;
  }
`

export default function Layout({ children }) {
  return <PageWrapper>{children}</PageWrapper>
}
