import styled from "styled-components"

const Card = styled.div`
  width: 350px;
  height: max-content;
  margin: 20px 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(230, 233, 239);
  \ :hover {
    box-shadow: 0 20px 50px 0 rgba(12, 16, 20, 0.1);
    transform: translateY(-10px);
    transition: transform 600ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  @media (min-width: 500px) and (max-width: 780px) {
    width: 40%;
  }
`
export default Card
