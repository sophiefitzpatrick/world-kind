import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import Image from "../Image"
import logo from "../../media/images/illustrations/logo-200.png"

const DesktopNavigation = styled.ul`
  background-color: white;
  cursor: pointer;
  height: 80px;
  list-style: none;
  display: flex;
  justify-content: space-between;
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
  background-color: ${props => props.shouldHighlightTab && "#225358"};
  color: ${props =>
    props.shouldHighlightTab ? "white" : props.color || "#225358"};

  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 0 5px;
  }
`

const WorldKindLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`
export default function Navigation({ currentPage }) {
  const NavItems = [
    { title: "Home", to: "/" },
    { title: "Projects", to: "/projects" },
    { title: "Blog", to: "/blog" },
  ]

  return (
    <>
      <DesktopNavigation>
        <WorldKindLink to="/">
          <li style={{ height: "80px" }}>
            <Image height="80px" src={logo}></Image>
          </li>
        </WorldKindLink>
        <div
          style={{
            width: "50%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {NavItems.map(item => {
            return (
              <NavItem
                key={item.title}
                shouldHighlightTab={item.to.split("/")[1] === currentPage}
              >
                <WorldKindLink to={item.to}>
                  <p>{item.title}</p>
                </WorldKindLink>
              </NavItem>
            )
          })}
        </div>
      </DesktopNavigation>

      <MobileNavigation>
        <NavItem>
          <WorldKindLink to="/">
            <p>Home</p>
          </WorldKindLink>
        </NavItem>
        <NavItem backgroundColor="#225358" color="white">
          <WorldKindLink to="projects">
            <p>Projects</p>
          </WorldKindLink>
        </NavItem>
        <NavItem>
          <WorldKindLink to="/">
            <p>What we do</p>
          </WorldKindLink>
        </NavItem>
        <NavItem>
          <WorldKindLink to="/blog">
            <p>Blog</p>
          </WorldKindLink>
        </NavItem>
      </MobileNavigation>
    </>
  )
}
