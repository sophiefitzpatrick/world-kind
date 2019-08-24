import styled from "styled-components"

const Paragraph = styled.p`
  font-size: 1.25rem;
  color: #0a132b;
  text-align: ${props => props.align || "left"};
`

export default Paragraph
