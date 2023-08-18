/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconRedirectLightTrue = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-redirect-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_401_6491)">
        <path
          className="path"
          d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00004C14.6666 4.31814 11.6818 1.33337 7.99992 1.33337C4.31802 1.33337 1.33325 4.31814 1.33325 8.00004C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M6.6665 5.33337L10.6665 8.00004L6.6665 10.6667V5.33337Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M6.77783 8.61106C7.04028 8.96192 7.37511 9.25223 7.75961 9.4623C8.14412 9.67238 8.56931 9.7973 9.00634 9.8286C9.44337 9.8599 9.88202 9.79684 10.2925 9.64371C10.7031 9.49057 11.0758 9.25094 11.3856 8.94106L13.2189 7.10773C13.7755 6.53145 14.0835 5.7596 14.0766 4.95845C14.0696 4.15729 13.7482 3.39092 13.1817 2.82439C12.6152 2.25787 11.8488 1.93652 11.0477 1.92956C10.2465 1.9226 9.47467 2.23058 8.89839 2.78717L7.84728 3.83217"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M9.22243 7.3888C8.95998 7.03794 8.62515 6.74763 8.24064 6.53755C7.85614 6.32748 7.43095 6.20256 6.99392 6.17126C6.55688 6.13996 6.11823 6.20302 5.70771 6.35615C5.2972 6.50929 4.92441 6.74892 4.61465 7.0588L2.78131 8.89213C2.22472 9.46841 1.91674 10.2403 1.9237 11.0414C1.93066 11.8426 2.25201 12.6089 2.81854 13.1755C3.38506 13.742 4.15143 14.0633 4.95259 14.0703C5.75375 14.0773 6.52559 13.7693 7.10187 13.2127L8.14687 12.1677"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_401_6491">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconRedirectLightTrue.propTypes = {
  color: PropTypes.string,
};
