import React from "react"
import { Popover } from "antd"

const Popover1 = props => (
  <Popover content={props.content} title={props.title}>
    {props.children}
  </Popover>
)

export default Popover1
