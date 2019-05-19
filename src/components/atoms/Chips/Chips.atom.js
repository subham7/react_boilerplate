import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import "./style.css"

const Chips = props => (
  <Chip
    avatar={<Avatar>{props.avatar}</Avatar>}
    label={props.label}
    onClick={props.onClick}
    onDelete={props.onDelete}
    color="primary"
  />
)

export default Chips
