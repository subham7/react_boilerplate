import React from "react"
import { storiesOf } from "@storybook/react"
import Navbar from "./Navbar.molecule"

const data = [
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  },
  {
    heading: "Heading",
    message: "Message"
  }
]

storiesOf("Navbar", module).add("Navbar", () => <Navbar notification={data} />)
