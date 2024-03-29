/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Icon16Px9 = ({ color = "white", className }) => {
  return (
    <svg
      className={`icon-16px-9 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_736)">
        <path
          className="path"
          d="M14 3V7H10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.3"
        />
        <path
          className="path"
          d="M2 13V9H5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.3"
        />
        <path
          className="path"
          d="M3.36909 6.3329C3.64573 5.53646 4.11589 4.82439 4.73571 4.26314C5.35553 3.70189 6.1048 3.30975 6.91361 3.12331C7.72242 2.93686 8.56441 2.9622 9.36101 3.19695C10.1576 3.43169 10.8829 3.8682 11.4691 4.46574L14 6.8886M2 9.1114L4.53091 11.5343C5.11714 12.1318 5.84239 12.5683 6.63899 12.8031C7.43559 13.0378 8.27758 13.0631 9.08639 12.8767C9.8952 12.6903 10.6445 12.2981 11.2643 11.7369C11.8841 11.1756 12.3543 10.4635 12.6309 9.6671"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.3"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_736">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

Icon16Px9.propTypes = {
  color: PropTypes.string,
};
