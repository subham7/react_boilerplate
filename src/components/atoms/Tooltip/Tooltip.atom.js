import React from "react"
import { Tooltip } from "antd"

const Tooltip1 = props => (
  <Tooltip title={props.title}>{props.children}</Tooltip>
)

export default Tooltip1
