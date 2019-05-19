import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Input from "./Input.atom"

const handleChange = e => {
  console.log(e.target.name)
  console.log(e.target.value)
}

storiesOf("Input", module)
  .add("Normal Input", () => {
    return (
      <Input type="date" name="input1" label="input1" onChange={handleChange} />
    )
  })
  .add("Multiline", () => (
    <Input
      name="input2"
      label="input2"
      multiline={true}
      rows="4"
      onChange={handleChange}
    />
  ))
  .add("Helper Text", () => {
    return (
      <Input
        name="input1"
        label="input1"
        onChange={handleChange}
        helperText="helperText"
      />
    )
  })
