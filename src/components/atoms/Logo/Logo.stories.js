import React from "react"
import { storiesOf } from "@storybook/react"
import Logo from "./Logo.atom.js"

storiesOf("Logo", module)
  .add("Full Logo", () => <Logo type="full" />)
  .add("Small Blue Logo", () => (
    <Logo type="small-blue" alt="Koyofea" height="3" />
  ))
  .add("Small White Logo", () => (
    <Logo type="small-white" alt="Koyofea" height="5" />
  ))
