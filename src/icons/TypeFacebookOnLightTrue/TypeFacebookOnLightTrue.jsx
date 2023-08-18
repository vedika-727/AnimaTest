/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TypeFacebookOnLightTrue = ({ color = "black", className }) => {
  return (
    <svg
      className={`type-facebook-on-light-true ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 25 25"
      width="25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10.8053 13.6349V21.3894H13.987V13.6357H16.6406L17.0377 10.6137H13.987V8.68383C13.987 7.80943 14.2345 7.21286 15.5136 7.21286L17.1449 7.21203V4.50872C16.8625 4.47201 15.8947 4.3894 14.7677 4.3894C12.4153 4.3894 10.8053 5.7978 10.8053 8.3843V10.6129H8.1449V13.6349H10.8053Z"
        fill={color}
      />
    </svg>
  );
};

TypeFacebookOnLightTrue.propTypes = {
  color: PropTypes.string,
};
