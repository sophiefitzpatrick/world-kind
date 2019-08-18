import React from "react"
import styled from "styled-components"

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 10%;
`

export default function Layout({ children }) {
  return <PageWrapper>{children}</PageWrapper>
}
