/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconAnchorHoverLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-anchor-hover-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.00005 4.80005V8.00005M8.00005 11.2C9.33338 11.2 11.2 10.8475 11.2 9.07515M8.00005 11.2C6.66672 11.2 4.80005 10.6505 4.80005 9.07515M8.00005 11.2V8.00005M8.00005 8.00005H9.33338M8.00005 8.00005H6.66672"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="0.8"
      />
      <circle className="circle-2" cx="8.0001" cy="7.99998" r="6.2" stroke={color} strokeWidth="0.4" />
      <rect className="rect" height="15.2" rx="7.6" stroke={color} strokeWidth="0.8" width="15.2" x="0.4" y="0.4" />
    </svg>
  );
};

IconAnchorHoverLightTrue.propTypes = {
  color: PropTypes.string,
};
