import React from "react"
import { storiesOf } from "@storybook/react"
import Avatar from "./Avatar.atom"
import TestAvatar from "./../../../assets/images/test.jpg"

const textStyle = {
  backgroundColor: "#9400D3",
  color: "#fff"
}

storiesOf("Avatar", module)
  .add("With Profile Pic", () => <Avatar src={TestAvatar} alt="Test" />)
  .add("With Text", () => <Avatar src={false} text="KA" style={textStyle} />)
