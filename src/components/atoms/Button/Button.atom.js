import React from "react"
import PropTypes from "prop-types"
import { Button } from "antd"
import "./style.css"

const Button1 = props => {
  let style = { margin: "3px" }

  return (
    <Button
      style={{ ...style, ...props.style }}
      onClick={props.onClick}
      size={props.size}
      type={props.type}
      disabled={props.disabled}
      href={props.href}
      ghost={props.ghost}
      loading={props.loading}
      shape={props.shape}
    >
      {props.children}
    </Button>
  )
}

Button1.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool
}

Button1.defaultProps = {
  size: "medium",
  type: "",
  disabled: false
}

export default Button1
