/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconMoveLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-move-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M7.5147 0.200841C7.78273 -0.066947 8.2173 -0.066947 8.48533 0.200841L10.799 2.51238C11.067 2.78017 11.067 3.21434 10.799 3.48212C10.5309 3.74991 10.0964 3.74991 9.82834 3.48212L8.68636 2.34118V13.6588L9.82834 12.5179C10.0964 12.2501 10.5309 12.2501 10.799 12.5179C11.067 12.7857 11.067 13.2198 10.799 13.4876L8.48533 15.7992C8.2173 16.0669 7.78273 16.0669 7.5147 15.7992L5.20112 13.4876C4.93308 13.2198 4.93308 12.7857 5.20112 12.5179C5.46915 12.2501 5.90371 12.2501 6.17175 12.5179L7.31368 13.6588V2.34118L6.17169 3.48212C5.90365 3.74991 5.46909 3.74991 5.20106 3.48212C4.93302 3.21434 4.93302 2.78017 5.20106 2.51238L7.5147 0.200841Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M15.7992 7.5147C16.0669 7.78273 16.0669 8.2173 15.7992 8.48533L13.4876 10.799C13.2198 11.067 12.7857 11.067 12.5179 10.799C12.2501 10.5309 12.2501 10.0964 12.5179 9.82834L13.6588 8.68636L2.34117 8.68635L3.48212 9.82834C3.74991 10.0964 3.74991 10.5309 3.48212 10.799C3.21433 11.067 2.78016 11.067 2.51238 10.799L0.20084 8.48533C-0.0669462 8.2173 -0.0669462 7.78273 0.20084 7.5147L2.51238 5.20111C2.78016 4.93308 3.21433 4.93308 3.48212 5.20111C3.74991 5.46915 3.74991 5.90371 3.48212 6.17175L2.34117 7.31368L13.6588 7.31368L12.5179 6.17169C12.2501 5.90365 12.2501 5.46909 12.5179 5.20106C12.7857 4.93302 13.2198 4.93302 13.4876 5.20106L15.7992 7.5147Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

IconMoveLightTrue.propTypes = {
  color: PropTypes.string,
};
