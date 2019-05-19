import React from "react"
import { storiesOf } from "@storybook/react"
import Upload from "./Upload.molecule"

storiesOf("Upload", module).add("Upload Demo", () => (
  <Upload
    name="file"
    multiple={true}
    action="//jsonplaceholder.typicode.com/posts/"
  />
))
