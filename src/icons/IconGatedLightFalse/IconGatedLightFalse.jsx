/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconGatedLightFalse = ({ color = "#72FFB3", className }) => {
  return (
    <svg
      className={`icon-gated-light-false ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_463_4753)">
        <path
          className="path"
          d="M4.0447 2.36596C3.76003 2.23944 3.76003 1.48031 3.31721 1.13238C3.12742 0.926214 3.03254 1.48031 2.7795 2.04966C2.52646 2.619 2.052 2.49248 1.54592 2.9353C1.03984 3.37812 1.98874 3.47301 2.33667 3.59954C2.6846 3.72606 2.71623 4.76985 3.15906 4.928C3.60188 5.08615 3.4121 4.67496 3.85492 4.07399C4.29774 3.47301 4.93035 3.50464 5.27828 3.12508C5.62621 2.74552 4.32937 2.49248 4.0447 2.36596Z"
          fill={color}
        />
        <path
          className="path"
          d="M6.44866 5.49736C7.06225 4.73199 7.46082 3.15672 8.66277 2.80879C9.45353 2.55575 10.3708 4.99127 10.6871 5.90855C11.0034 6.82583 13.5654 7.30028 13.8185 8.0594C14.0715 8.81853 12.0788 9.76743 10.8769 10.4317C9.67493 11.0959 9.92797 13.8794 8.44136 13.911C6.95474 13.9426 6.4929 11.1275 6.08171 10.5898C5.67052 10.0521 2.7163 9.32461 3.41216 7.86962C3.97188 6.6993 5.83507 6.26273 6.44866 5.49736Z"
          stroke={color}
          strokeWidth="1.51825"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_463_4753">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconGatedLightFalse.propTypes = {
  color: PropTypes.string,
};
