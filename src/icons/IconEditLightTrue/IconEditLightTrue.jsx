/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconEditLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-edit-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 6.42077L13.4986 4.92212C13.6576 4.76317 13.7837 4.57447 13.8697 4.3668C13.9557 4.15912 14 3.93653 14 3.71174C14 3.48695 13.9557 3.26436 13.8697 3.05669C13.7837 2.84901 13.6576 2.66031 13.4986 2.50136C13.3397 2.34241 13.151 2.21632 12.9433 2.1303C12.7356 2.04428 12.513 2 12.2883 2C12.0635 2 11.8409 2.04428 11.6332 2.1303C11.4255 2.21632 11.2368 2.34241 11.0779 2.50136L9.5 4.07923M12 6.42077L5.32855 13.0922L2 14L2.90779 10.6714L9.5 4.07923M12 6.42077L9.5 4.07923"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconEditLightTrue.propTypes = {
  color: PropTypes.string,
};
