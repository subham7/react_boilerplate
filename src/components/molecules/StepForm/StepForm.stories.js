import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import StepForm from "./StepForm.molecule"

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad"
]

const stepContent = stepIndex => {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings..."
    case 1:
      return "What is an ad group anyways?"
    case 2:
      return "This is the bit I really care about!"
    default:
      return "Uknown stepIndex"
  }
}

storiesOf("Step Form", module).add("Demo", () => (
  <StepForm
    steps={steps}
    stepContent={stepIndex => stepContent(stepIndex)}
    onSubmit={action("Submit")}
  />
))
