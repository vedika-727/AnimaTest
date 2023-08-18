/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeVimeoOnLightFalse = ({ color = "white", className }) => {
  return (
    <svg
      className={`type-vimeo-on-light-false ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.1082 11.5393C19.175 15.5457 14.5081 21 11.5583 21C8.65132 21 8.23094 14.9858 6.64325 10.9829C5.86188 9.01431 5.35719 9.46586 3.893 10.46L3 9.34261C5.13513 7.52143 7.27382 5.40536 8.58719 5.28786C10.0656 5.14963 10.9764 6.12991 11.3173 8.22985C11.7673 10.9898 12.3955 15.2727 13.4928 15.2727C14.3478 15.2727 16.4544 11.8745 16.5624 10.6604C16.7548 8.88184 15.2146 8.8277 13.8775 9.38292C15.9924 2.66034 24.7954 3.89865 21.1082 11.5393Z"
        fill={color}
      />
    </svg>
  );
};

TypeVimeoOnLightFalse.propTypes = {
  color: PropTypes.string,
};
