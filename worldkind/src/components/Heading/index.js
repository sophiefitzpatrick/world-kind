import styled from "styled-components"

const Heading = styled.h2`
  font-size: ${props => props.size};
  color: ${props => props.color || "#0a132b"};
  text-align: ${props => props.align || "center"};
  margin-bottom: 0;
`
export default Heading
