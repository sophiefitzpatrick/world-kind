import styled from "styled-components"

const MaxWidth = styled.div`
  max-width: ${props => props.width}%;

  @media (max-width: 760px) {
    max-width: 100%;
  }
`

export default MaxWidth
