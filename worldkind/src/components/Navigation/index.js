import React from "react"
import { Link } from "gatsby"

export default function Nav({ text }) {
  return (
    <Link to="/about">
      <h1>{text}</h1>
    </Link>
  )
}
