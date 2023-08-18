/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconDisconnectLightTrue = ({ color = "white", stroke = "white", className }) => {
  return (
    <svg
      className={`icon-disconnect-light-true ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_463_4677)">
        <path
          className="path"
          d="M7.08074 4.42792L8.49496 3.01371C8.80448 2.70418 9.17195 2.45865 9.57637 2.29113C9.98079 2.12362 10.4142 2.0374 10.852 2.0374C11.2897 2.0374 11.7232 2.12362 12.1276 2.29113C12.532 2.45865 12.8995 2.70418 13.209 3.01371C13.5185 3.32324 13.7641 3.6907 13.9316 4.09512C14.0991 4.49954 14.1853 4.93299 14.1853 5.37073C14.1853 5.80847 14.0991 6.24193 13.9316 6.64634C13.7641 7.05076 13.5185 7.41823 13.209 7.72776L11.7948 9.14197M8.96636 11.9704L7.55215 13.3846C7.24262 13.6941 6.87515 13.9397 6.47074 14.1072C6.06632 14.2747 5.63286 14.3609 5.19512 14.3609C4.31107 14.3609 3.46322 14.0097 2.8381 13.3846C2.21298 12.7595 1.86179 11.9116 1.86179 11.0276C1.86179 10.1435 2.21298 9.29569 2.8381 8.67057L4.25232 7.25635"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M6.13806 6.31372L9.9093 10.085"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M5.14795 1.32349L5.14795 3.54571"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M3.37012 5.32349L1.1479 5.32349"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M10.8521 15.0276L10.8521 12.8054"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M12.6299 11.0276L14.8521 11.0276"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_463_4677">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconDisconnectLightTrue.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
};
