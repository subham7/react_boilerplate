import React from "react"
import PropTypes from "prop-types"
import { Title } from "atoms"

const FormStructure = props => {
  const style = {
    marginBottom: props.marginBottom + "px"
  }

  return (
    <div style={props.style}>
      {props.displayHeading ? (
        <div>
          <Title>{props.heading}</Title>
          <br />
        </div>
      ) : null}

      <form onSubmit={props.onSubmit}>
        {props.field.map((fieldData, index) => (
          <div key={index} style={style}>
            {fieldData.field}
          </div>
        ))}
      </form>
    </div>
  )
}

FormStructure.propTypes = {
  onSubmit: PropTypes.func,
  field: PropTypes.array,
  displayHeading: PropTypes.bool
}

FormStructure.defaultProps = {
  displayHeading: true,
  marginBottom: 0
}

export default FormStructure
