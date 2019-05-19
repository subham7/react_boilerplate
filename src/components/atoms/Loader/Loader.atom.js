import React from "react"
import { Spin } from "antd"
import "./style.css"

export default () => (
  <div className="loader-container">
    <Spin className="loader" size="large" />
  </div>
)
