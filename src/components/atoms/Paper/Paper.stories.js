import React from "react"
import { storiesOf } from "@storybook/react"
import Paper from "./Paper.atom"

storiesOf("Paper", module)
  .add("Default Paper", () => <Paper>Hello World!</Paper>)
  .add("Custom Paper", () => (
    <Paper elevation={5} square={true}>
      Hello World
    </Paper>
  ))
