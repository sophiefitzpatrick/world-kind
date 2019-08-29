import React from "react"

import Card from "../components/Card"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Heading from "../components/Heading"
import MaxWidth from "../components/MaxWidth"
import Navigation from "../components/Navigation"
import Paragraph from "../components/Paragraph"

import logo from "../media/images/illustrations/logo-200.png"

import blogInformation from "../configs/blogInfo.js"

export default function Blog() {
  const windowLocation = window.location.href.split("/")
  return (
    <>
      <Navigation currentPage={windowLocation[3]} />
      <Layout>
        <Image src={logo}></Image>
        <MaxWidth width={65}>
          <Heading size="3rem">We Are WorldKind</Heading>
        </MaxWidth>
        <MaxWidth width={60}>
          <Paragraph>Empowering big impact with small actions</Paragraph>
        </MaxWidth>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "center",
            margin: "5% 0",
          }}
        >
          {blogInformation.map(item => {
            return (
              <a
                href={`${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Card key={item.title}>
                  <Image width="100%" height="250px" src={item.image}></Image>
                  <div
                    style={{
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Paragraph align="center">{item.description}</Paragraph>
                    <div>
                      <img
                        alt={`${item.author} avatar`}
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "100%",
                          position: "absolute",
                          bottom: "3%",
                          left: "4%",
                        }}
                        src={item.author}
                      ></img>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>
      </Layout>
    </>
  )
}
