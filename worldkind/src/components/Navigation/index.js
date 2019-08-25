import styled from "styled-components"

export const Navigation = styled.ul`
  background-color: white;
  height: 80px;
  list-style: none;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr;
  width: 100%;
  margin: 0 0 3rem 0;
  padding: 0 10px;
  position: fixed;
  border-bottom: 1px solid lightGray;
  z-index: 99;
`

export const NavItem = styled.li`
  color: #225358;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  height: 80px;
`
