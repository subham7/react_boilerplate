import React from "react"
import { storiesOf } from "@storybook/react"
import CardWithHeader from "./CardWithHeader.molecule"

storiesOf("Card with Header", module).add("Demo", () => (
  <CardWithHeader title="Header">Body</CardWithHeader>
))
