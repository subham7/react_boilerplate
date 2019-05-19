import React from "react"
import PropTypes from "prop-types"
import LogoFull from "./../../../assets/images/logo-full.png"
import LogoSmallBlue from "./../../../assets/images/logo-small-blue.png"
import LogoSmallWhite from "./../../../assets/images/logo-small-white.png"

const Logo = props => {
  const style = {
    height: props.height + "em",
    width: "auto"
  }

  switch (props.type) {
    case "full":
      return <img src={LogoFull} alt={props.logoAlt} style={style} />

    case "small-blue":
      return <img src={LogoSmallBlue} alt={props.alt} style={style} />

    case "small-white":
      return <img src={LogoSmallWhite} alt={props.alt} style={style} />

    default:
      return <img src={LogoFull} alt={props.logoAlt} style={style} />
  }
}

Logo.propTypes = {
  type: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string
}

Logo.defaultProps = {
  alt: "Koyofea",
  height: "2"
}

export default Logo
