import React from "react"
import PropTypes from "prop-types"

const Subtitle = props => {
  return <h4 style={props.style}>{props.children}</h4>
}

Subtitle.propTypes = {
  children: PropTypes.string
}

Subtitle.defaultProps = {
  children: ""
}

export default Subtitle
