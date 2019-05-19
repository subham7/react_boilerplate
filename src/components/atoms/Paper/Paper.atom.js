import React from "react"
import PropTypes from "prop-types"
import Paper from "@material-ui/core/Paper"

const Paper1 = props => {
  return (
    <Paper
      className="paper"
      square={props.square}
      elevation={props.elevation}
      style={props.style}
    >
      {props.children}
    </Paper>
  )
}

Paper1.propTypes = {
  elevation: PropTypes.number,
  style: PropTypes.node,
  square: PropTypes.bool
}

Paper1.defaultProps = {
  elevation: 1,
  square: false
}

export default Paper1
