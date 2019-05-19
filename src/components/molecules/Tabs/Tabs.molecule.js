import React from "react"
import { Tabs } from "antd"
const TabPane = Tabs.TabPane

const Tabs1 = props => (
  <Tabs defaultActiveKey="0" tabPosition={props.tabPosition}>
    {props.tabData.map((data, index) => (
      <TabPane tab={data.label} key={index}>
        {data.content}
      </TabPane>
    ))}
  </Tabs>
)

export default Tabs1
