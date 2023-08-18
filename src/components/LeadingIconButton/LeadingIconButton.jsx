/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconAddLightTrue } from "../../icons/IconAddLightTrue";
import "./style.css";

export const LeadingIconButton = ({
  property1,
  className,
  visible = true,
  divClassName,
  text = "Add URL Extension",
  icon = <IconAddLightTrue className="icon-px" color="black" />,
}) => {
  return (
    <div className={`leading-icon-button ${property1} ${className}`}>
      {["i-deactivated", "i-default-hover", "i-default", "i-no-stroke"].includes(property1) && (
        <>
          <>{visible && <>{icon}</>}</>
          <div className={`add-URL-extension ${divClassName}`}>{text}</div>
        </>
      )}

      {["i-dropdown-hover", "i-dropdown"].includes(property1) && (
        <>
          <IconAddLightTrue className="icon-px" color={property1 === "i-dropdown" ? "black" : "white"} />
          <div className="add-URL-extension-2">{text}</div>
          <div className="polygon-wrapper">
            <img
              className="polygon"
              alt="Polygon"
              src={
                property1 === "i-dropdown"
                  ? "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/polygon-5-1.svg"
                  : "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/polygon-5-4.svg"
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

LeadingIconButton.propTypes = {
  property1: PropTypes.oneOf([
    "i-default-hover",
    "i-deactivated",
    "i-no-stroke",
    "i-default",
    "i-dropdown-hover",
    "i-dropdown",
  ]),
  visible: PropTypes.bool,
  text: PropTypes.string,
};
