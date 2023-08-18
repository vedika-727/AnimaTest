/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeYoutubeOnLightTrue = ({ color = "black", className }) => {
  return (
    <svg
      className={`type-youtube-on-light-true ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M8 19L20 12.5001L8 6V19Z" fill={color} />
    </svg>
  );
};

TypeYoutubeOnLightTrue.propTypes = {
  color: PropTypes.string,
};
