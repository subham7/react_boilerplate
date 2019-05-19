import React from "react"
import { Badge } from "antd"

const style = {
  color: "#fff",
  backgroundColor: "#3062cf",
  zIndex: "1"
}

const Badge1 = props => (
  <Badge style={style} count={props.count}>
    {props.children}
  </Badge>
)

export default Badge1
