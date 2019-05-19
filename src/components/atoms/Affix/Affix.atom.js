import React from "react"
import { Affix } from "antd"

const Affix1 = props => (
  <Affix offsetTop={props.offsetTop}>{props.children}</Affix>
)

export default Affix1
