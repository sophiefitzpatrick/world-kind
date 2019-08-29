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
  return (
    <>
      <Navigation />
      <Layout>
        <Image src={logo}></Image>
        <MaxWidth width={65}>
          <Heading size="3rem">We Are WorldKind</Heading>
        </MaxWidth>
        <MaxWidth width={60}>
          <Paragraph>Empowering big impact with small actions</Paragraph>
        </MaxWidth>
        {/* potentially could have a progress bar here showing ho w much they've read */}
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
                style={{ textDecoration: "none" }}
              >
                <Card
                  key={item.title}
                  onClick={() => {
                    console.log("hello")
                  }}
                >
                  <Image width="100%" height="250px" src={item.image}></Image>
                  <div
                    style={{
                      height: "200px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center;",
                      flexDirection: "column",
                    }}
                  >
                    <Paragraph align="center">{item.description}</Paragraph>
                    <div>
                      <img
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "100%",
                          position: "absolute",
                          bottom: "2%",
                          left: "5%",
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
