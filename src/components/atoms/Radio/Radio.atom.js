import React from "react"
import PropTypes from "prop-types"
import { reduxFormField } from "utils"

import { Radio } from "antd"
import "./style.css"

const RadioGroup = Radio.Group

const Radio1 = ({ onChange, name, value, option, label }) => (
  <div style={{ marginBottom: "25px" }}>
    <p className="label">{label}</p>
    <br />
    <RadioGroup onChange={onChange} name={name} value={value}>
      {option.map((data, index) => (
        <Radio key={index} value={data.value}>
          {data.label}
        </Radio>
      ))}
    </RadioGroup>
  </div>
)

export default reduxFormField(Radio1)
