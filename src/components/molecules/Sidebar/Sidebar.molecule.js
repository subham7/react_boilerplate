import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Logo, Paragraph } from "./../../atoms"
import "./style.css"

const style = {
  fontSize: "0.7em",
  position: "relative",
  top: "-15px",
  fontWeight: "800"
}

const Sidebar = props => {
  const element = (
    <div className="sidebar-element-wrapper">
      {props.element.map((data, index) => (
        <Link to={data.url}>
          <div className="sidebar-element" key={index}>
            <p className="sidebar-icon">{data.icon}</p>
            <Paragraph style={style}>{data.text}</Paragraph>
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <div className="sidebar">
      <Logo type="small-blue" height="3.5" />
      {element}
    </div>
  )
}

Sidebar.propTypes = {
  element: PropTypes.array.isRequired
}

export default Sidebar
