import React from "react"
import PropTypes from "prop-types"
import { reduxFormField } from "utils"

import { Select } from "antd"
import "./style.css"

const Option = Select.Option

const handleBlur = () => {
  console.log("blur")
}

const handleFocus = () => {
  console.log("focus")
}

const Select1 = props => {
  return (
    <div style={{ marginBottom: "25px" }}>
      <p className="label">{props.label}</p>
      <Select
        showSearch
        value={props.value}
        showSearch={props.showSearch}
        mode={props.type}
        style={{ width: "100%" }}
        optionFilterProp="children"
        onChange={props.onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {props.option.map((optionData, index) => {
          return (
            <Option key={index} value={optionData.id}>
              {optionData.name}
            </Option>
          )
        })}
      </Select>
    </div>
  )
}

Select1.propTypes = {
  name: PropTypes.string,
  value: PropTypes.node,
  label: PropTypes.string,
  onChange: PropTypes.func,
  option: PropTypes.array,
  helperText: PropTypes.string
}

Select1.defaultProps = {
  helperText: ""
}

export default reduxFormField(Select1)
