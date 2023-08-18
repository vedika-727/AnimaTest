/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconHistoryLightFalse = ({ color = "#222731", className }) => {
  return (
    <svg
      className={`icon-history-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_463_4758)">
        <path
          className="path"
          d="M7.59998 3.80005V8.60005L10.8 10.2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M3.99617 5.49223H1.5C1.22386 5.49223 1 5.26838 1 4.99223V2.26473M1.41176 5.39545C2.5572 3.09056 5.25155 1.11768 8 1.11768C11.866 1.11768 15 4.25168 15 8.11768C15 11.9837 11.866 15.1177 8 15.1177C4.72049 15.1177 1.96772 12.8624 1.20799 9.81819"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_463_4758">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconHistoryLightFalse.propTypes = {
  color: PropTypes.string,
};
