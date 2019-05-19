import React from "react"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

const NavTabs = props => (
  <div>
    {props.displayTabs ? (
      <Tabs>
        {props.tabLink.map((data, index) => (
          <Tab key={index} label={data.label} href={data.link} />
        ))}
      </Tabs>
    ) : null}
  </div>
)

export default NavTabs
