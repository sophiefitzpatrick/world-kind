import styled from "styled-components"

const Paragraph = styled.p`
  font-size: ${props => props.size || "1.25rem"};
  color: ${props => props.color || "#0a132b"};
  text-align: ${props => props.align || "left"};
`

export default Paragraph
