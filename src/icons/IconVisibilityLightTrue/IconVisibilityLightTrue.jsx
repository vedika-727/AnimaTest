/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconVisibilityLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-visibility-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M0.999023 8C0.999023 8 3.54448 3 7.99902 3C12.4536 3 14.999 8 14.999 8C14.999 8 12.4536 13 7.99902 13C3.54448 13 0.999023 8 0.999023 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M7.99902 10C9.10359 10 9.99902 9.10457 9.99902 8C9.99902 6.89543 9.10359 6 7.99902 6C6.89445 6 5.99902 6.89543 5.99902 8C5.99902 9.10457 6.89445 10 7.99902 10Z"
        fill={color}
      />
    </svg>
  );
};

IconVisibilityLightTrue.propTypes = {
  color: PropTypes.string,
};
