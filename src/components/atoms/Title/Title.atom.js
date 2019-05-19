import React from "react";
import PropTypes from "prop-types";

const Title = props => {
  return <h2>{props.children}</h2>;
};

Title.propTypes = {
  children: PropTypes.string
};

Title.defaultProps = {
  children: ""
};

export default Title;
