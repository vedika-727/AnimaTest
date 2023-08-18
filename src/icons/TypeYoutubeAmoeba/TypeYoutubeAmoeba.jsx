/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeYoutubeAmoeba = ({ color = "#FF0000", className }) => {
  return (
    <svg
      className={`type-youtube-amoeba ${className}`}
      fill="none"
      height="47"
      viewBox="0 0 47 47"
      width="47"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M46.3962 17.297C47.8545 22.287 46.383 27.82 45.0175 32.9392C42.6709 41.7299 34.977 42.7021 23.9999 45.2488C9.93378 48.5065 11.4232 40.3596 6.05397 36.2745C1.22828 32.6031 0.180947 27.8846 1.55972 23.1531C5.84186 8.54514 10.0312 1.90043 22.281 0.194011C30.2752 -0.917749 33.8812 2.88292 35.7638 8.15732C38.3622 15.3967 44.3413 10.2774 46.3962 17.297Z"
        fill={color}
      />
    </svg>
  );
};

TypeYoutubeAmoeba.propTypes = {
  color: PropTypes.string,
};
