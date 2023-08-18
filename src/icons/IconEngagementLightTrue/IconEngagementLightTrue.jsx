/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconEngagementLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-engagement-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.7464 4.37305L8.81047 10.309L5.68628 7.18481L1 11.8711M14.7464 4.37305H10.9983M14.7464 4.37305L14.7473 8.12207"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconEngagementLightTrue.propTypes = {
  color: PropTypes.string,
};
