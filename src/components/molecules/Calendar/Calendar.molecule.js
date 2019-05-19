import React from "react"
import { Calendar } from "antd"

const onPanelChange = (value, mode) => {
  console.log(value, mode)
}

const Calendar1 = props => <Calendar onPanelChange={onPanelChange} />

export default Calendar1
