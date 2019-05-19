import React from "react"
import Avatar from "@material-ui/core/Avatar"

const Avatar1 = props => {
  if (props.src === false)
    return <Avatar style={props.style}>{props.text}</Avatar>
  else return <Avatar style={props.style} src={props.src} alt={props.alt} />
}

export default Avatar1
