import styled from "styled-components"

const Card = styled.div`
  width: 300px;
  height: max-content;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(230, 233, 239);
  \ :hover {
    box-shadow: 0 20px 50px 0 rgba(12, 16, 20, 0.1);
  }
`
export default Card
