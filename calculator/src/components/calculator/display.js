import React from "react";
import PropTypes from "prop-types";

const Display = props => (
  <div className="mx-auto w-25">
    <div className="display text-right pr-2 display-4 d-none d-lg-block pt-4">
      {props.value}
    </div>
  </div>
);

Display.defaultProps = {
  expression: "",
  value: "0"
};

Display.propTypes = {
  value: PropTypes.string
};

export default Display;
