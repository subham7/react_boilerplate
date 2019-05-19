import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Radio from "./Radio.atom"

const testRadio = e => {
  //action(e.target.value);
  action("clicked")
}

storiesOf("Radio", module).add("Radio with option", () => {
  const optionData = [
    {
      value: 1,
      label: "One"
    },
    {
      value: 2,
      label: "Two"
    }
  ]

  return (
    <Radio
      option={optionData}
      onChange={action("click")}
      value={1}
      name="type"
      label="Type"
      ariaLabel="type"
    />
  )
})
