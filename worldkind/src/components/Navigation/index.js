import React from "react"
import styled from "styled-components"

import Image from "../Image"
import World from "../../media/images/world.jpg"

const DesktopNavigation = styled.ul`
  background-color: white;
  cursor: pointer;
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

  @media (max-width: 500px) {
    display: none;
  }
`
const MobileNavigation = styled.ul`
  background-color: white;
  cursor: pointer;
  border-bottom: 1px solid lightGray;
  z-index: 99;
  position: fixed;
  width: 100%;
  margin: 0 0 3rem 0;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 25%);

  @media (min-width: 501px) {
    display: none;
  }
`

const NavItem = styled.li`
  color: #225358;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  height: 80px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color || "#225358"};

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 0 5px;
  }
`
export default function Navigation() {
  return (
    <>
      <DesktopNavigation>
        <li style={{ height: "80px" }}>
          <Image height="80px" src={World}></Image>
        </li>
        <NavItem>
          <p>Home</p>
        </NavItem>
        <NavItem backgroundColor="#225358" color="white">
          <p>Projects</p>
        </NavItem>
        <NavItem>
          <p>What we do</p>
        </NavItem>
        <NavItem>
          <p>Blog</p>
        </NavItem>
      </DesktopNavigation>
      <MobileNavigation>
        <NavItem>
          <p>Home</p>
        </NavItem>
        <NavItem backgroundColor="#225358" color="white">
          <p>Projects</p>
        </NavItem>
        <NavItem>
          <p>What we do</p>
        </NavItem>
        <NavItem>
          <p>Blog</p>
        </NavItem>
      </MobileNavigation>
    </>
  )
}
