import React from "react"
import PropTypes from "prop-types"

const Paragraph = props => {
  const style = {
    margin: "0",
    ...props.style
  }

  return <p style={style}>{props.children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.string
}

Paragraph.defaultProps = {
  children: ""
}

export default Paragraph
