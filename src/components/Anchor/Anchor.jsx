/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TheIcon12 } from "../../icons/TheIcon12";
import { TheIcon14 } from "../../icons/TheIcon14";
import { AnchorIcon } from "../AnchorIcon";
import { AnchorShape } from "../AnchorShape";
import "./style.css";

export const Anchor = ({
  hasText,
  padding,
  large,
  className,
  overlapGroupClassName,
  anchorShapeType = "circle",
  anchorShapeTypeCircleClassName,
  anchorShapeEllipseClassName,
  anchorIconTypeIconOnLightClassName,
  anchorIconIcon = <TheIcon14 className="the-icon-14" color="white" />,
}) => {
  return (
    <div className={`anchor padding-${padding} large-${large} ${className}`}>
      {!padding && (
        <div className={`overlap-group ${overlapGroupClassName}`}>
          <AnchorShape
            ellipseClassName={anchorShapeEllipseClassName}
            type={anchorShapeType}
            typeCircleClassName={anchorShapeTypeCircleClassName}
          />
          <AnchorIcon
            icon={anchorIconIcon}
            onLight={false}
            type="icon"
            typeIconOnLightClassName={anchorIconTypeIconOnLightClassName}
          />
        </div>
      )}

      {padding && (
        <AnchorIcon
          icon={large ? <TheIcon12 className="the-icon-12" /> : <TheIcon14 className="the-icon-14" color="white" />}
          onLight={false}
          type="icon"
          typeIconOnLightClassName={`${large && "class"}`}
        />
      )}

      {hasText && <div className="text-wrapper">Text</div>}
    </div>
  );
};

Anchor.propTypes = {
  hasText: PropTypes.bool,
  padding: PropTypes.bool,
  large: PropTypes.bool,
  anchorShapeType: PropTypes.string,
};
