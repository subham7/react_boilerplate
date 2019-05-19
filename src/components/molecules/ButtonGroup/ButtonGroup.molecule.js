import React from "react"
import { Button } from "antd"

const ButtonGroup = Button.Group

const ButtonGroup1 = props => {
  console.log(props)

  return (
    <ButtonGroup>
      {props.btnGroup.map((data, index) => (
        <Button key={index} onClick={data.onClick} style={props.style}>
          {data.label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default ButtonGroup1
