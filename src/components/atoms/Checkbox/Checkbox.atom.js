import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"

const Checkbox1 = props => (
  <FormControlLabel
    control={
      <Checkbox
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
        color="primary"
      />
    }
    label={props.label}
  />
)

export default Checkbox1
