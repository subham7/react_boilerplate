import React from "react"
import { storiesOf } from "@storybook/react"
import Table from "./Table.molecule"

const head = [
  { heading: "heading1" },
  { heading: "heading2" },
  { heading: "heading3" }
]

const row = [
  {
    row: [{ cell: "cell11" }, { cell: "cell12" }, { cell: "cell13" }],
    row: [{ cell: "cell21" }, { cell: "cell22" }, { cell: "cell23" }]
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }],
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }],
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }],
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }],
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }],
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }],
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }],
    // row: [{ cell: "cell1" }, { cell: "cell2" }, { cell: "cell3" }]
  }
]

storiesOf("Table", module).add("Demo", () => (
  <Table tableHead={head} tableRow={row} />
))
