/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeRedirectOnLightFalse = ({ color = "white", className }) => {
  return (
    <svg
      className={`type-redirect-on-light-false ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.625 6.49999L12.6875 4.43749C13.1389 3.98607 13.6748 3.62798 14.2647 3.38368C14.8545 3.13937 15.4866 3.01363 16.125 3.01363C16.7634 3.01363 17.3956 3.13937 17.9854 3.38368C18.5752 3.62798 19.1111 3.98607 19.5625 4.43749C20.0139 4.88891 20.372 5.42482 20.6163 6.01463C20.8606 6.60444 20.9864 7.23659 20.9864 7.87499C20.9864 8.5134 20.8606 9.14555 20.6163 9.73536C20.372 10.3252 20.0139 10.8611 19.5625 11.3125L17.5 13.375M13.375 17.5L11.3125 19.5625C10.8611 20.0139 10.3252 20.372 9.73537 20.6163C9.14556 20.8606 8.51341 20.9864 7.87501 20.9864C6.58569 20.9864 5.34919 20.4742 4.4375 19.5625C3.52582 18.6508 3.01364 17.4143 3.01364 16.125C3.01364 14.8357 3.52582 13.5992 4.4375 12.6875L6.5 10.625"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M9.25 14.75L14.75 9.24999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

TypeRedirectOnLightFalse.propTypes = {
  color: PropTypes.string,
};
