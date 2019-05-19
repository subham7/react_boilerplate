import React from "react"
import { Collapse } from "antd"
const Panel = Collapse.Panel

const callback = key => {
  console.log(key)
}

const Collapse1 = props => (
  <Collapse accordion={props.accordion} bordered={false} onChange={callback}>
    {props.panel.map((data, index) => (
      <Panel key={index} header={data.header} extra={props.extra}>
        {data.text}
      </Panel>
    ))}
  </Collapse>
)

export default Collapse1
