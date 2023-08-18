/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconHovrLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-hovr-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.11785 4.84636C10.2848 4.84636 11.2207 5.19677 11.9255 5.89757C12.6418 6.59838 13 7.65545 13 9.06873V14.5H9.70711V9.61186C9.70711 8.31536 9.19297 7.66712 8.16464 7.66712C7.5985 7.66712 7.14211 7.85398 6.79549 8.22776C6.46043 8.60155 6.29289 9.16219 6.29289 9.9097V14.5H3V1.5H6.29289V5.88005C6.65107 5.54133 7.07279 5.28437 7.55806 5.10916C8.04333 4.93396 8.56326 4.84636 9.11785 4.84636Z"
        fill={color}
      />
    </svg>
  );
};

IconHovrLightFalse.propTypes = {
  color: PropTypes.string,
};
