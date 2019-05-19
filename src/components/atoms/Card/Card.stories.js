import React from "react"
import { storiesOf } from "@storybook/react"
import Card from "./Card.atom"

const element = <h1 style={{ color: "#000" }}>Hello</h1>

storiesOf("Card", module).add("Card Demo", () => <Card>Hello World</Card>)
