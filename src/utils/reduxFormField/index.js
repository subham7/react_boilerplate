import React from "react"

const reduxFormField = Component => ({
  input,
  type,
  option,
  label,
  meta: { touched, error }
}) => (
  <div>
    <Component {...input} type={type} option={option} label={label} />
    {touched && error && <p>{error}</p>}
  </div>
)

export default reduxFormField
