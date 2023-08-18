/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconTrashLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-trash-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M2.27271 4.18181H3.54543M3.54543 4.18181H13.7273M3.54543 4.18181V13.0909C3.54543 13.4284 3.67952 13.7522 3.91821 13.9909C4.15689 14.2295 4.48061 14.3636 4.81816 14.3636H11.1818C11.5193 14.3636 11.8431 14.2295 12.0817 13.9909C12.3204 13.7522 12.4545 13.4284 12.4545 13.0909V4.18181M5.45452 4.18181V2.90908C5.45452 2.57153 5.58861 2.24781 5.8273 2.00913C6.06598 1.77044 6.3897 1.63635 6.72725 1.63635H9.2727C9.61025 1.63635 9.93398 1.77044 10.1727 2.00913C10.4113 2.24781 10.5454 2.57153 10.5454 2.90908V4.18181"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconTrashLightFalse.propTypes = {
  color: PropTypes.string,
};
