/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconPagesLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-pages-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        height="3.92424"
        rx="1.41667"
        stroke={color}
        strokeWidth="1.5"
        width="5.86364"
        x="5.06812"
        y="1.25"
      />
      <rect
        className="rect"
        height="3.92424"
        rx="1.41667"
        stroke={color}
        strokeWidth="1.5"
        width="5.86364"
        x="8.88623"
        y="10.6439"
      />
      <rect
        className="rect"
        height="3.92424"
        rx="1.41667"
        stroke={color}
        strokeWidth="1.5"
        width="5.86364"
        x="1.25"
        y="10.6439"
      />
      <path
        className="path"
        d="M8.00007 5.63635V7.75756M8.00007 7.75756H4.84855C4.48036 7.75756 4.18188 8.05604 4.18188 8.42423V10.1818M8.00007 7.75756H11.1516C11.5198 7.75756 11.8182 8.05604 11.8182 8.42423V10.1818"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconPagesLightFalse.propTypes = {
  color: PropTypes.string,
};
