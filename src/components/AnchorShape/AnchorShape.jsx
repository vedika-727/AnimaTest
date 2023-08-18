/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TypeTiktokAmoeba } from "../../icons/TypeTiktokAmoeba";
import { TypeUploadedAmoeba } from "../../icons/TypeUploadedAmoeba";
import { TypeVimeo } from "../../icons/TypeVimeo";
import { TypeYoutubeAmoeba } from "../../icons/TypeYoutubeAmoeba";
import "./style.css";

export const AnchorShape = ({ type, typeCircleClassName, ellipseClassName }) => {
  return (
    <>
      {type === "tiktok-amoeba" && <TypeTiktokAmoeba className="instance-node" />}

      {["border", "circle", "hotspot", "square"].includes(type) && (
        <div className={`anchor-shape ${typeCircleClassName}`}>
          <div className={`ellipse ${type} ${ellipseClassName}`}>{type === "hotspot" && <div className="div" />}</div>
        </div>
      )}

      {["facebook-amoeba", "spotify", "youtube-amoeba"].includes(type) && (
        <TypeYoutubeAmoeba
          className="instance-node"
          color={type === "facebook-amoeba" ? "#165EEF" : type === "spotify" ? "#1ED760" : "#FF0000"}
        />
      )}

      {type === "vimeo" && <TypeVimeo className="type-vimeo" />}

      {type === "uploaded-amoeba" && <TypeUploadedAmoeba className="instance-node" />}
    </>
  );
};

AnchorShape.propTypes = {
  type: PropTypes.oneOf([
    "circle",
    "uploaded-amoeba",
    "spotify",
    "border",
    "square",
    "youtube-amoeba",
    "tiktok-amoeba",
    "facebook-amoeba",
    "vimeo",
    "hotspot",
  ]),
};
