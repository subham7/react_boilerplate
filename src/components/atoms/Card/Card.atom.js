import React from "react"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"

const Card1 = props => {
  return <Card style={props.style}>{props.children}</Card>
}

export default Card1
