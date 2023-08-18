/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { TheIcon14 } from "../../icons/TheIcon14";
import { TypeFacebookOnLightTrue } from "../../icons/TypeFacebookOnLightTrue";
import { TypePdfOnLightFalse } from "../../icons/TypePdfOnLightFalse";
import { TypeRedirectOnLightFalse } from "../../icons/TypeRedirectOnLightFalse";
import { TypeSpotfiyOnLightFalse } from "../../icons/TypeSpotfiyOnLightFalse";
import { TypeTiktokOnLightFalse } from "../../icons/TypeTiktokOnLightFalse";
import { TypeVimeoOnLightFalse } from "../../icons/TypeVimeoOnLightFalse";
import { TypeYoutubeOnLightTrue } from "../../icons/TypeYoutubeOnLightTrue";
import "./style.css";

export const AnchorIcon = ({
  type,
  onLight,
  typeIconOnLightClassName,
  icon = <TheIcon14 className="the-icon" color="white" />,
}) => {
  return (
    <>
      {type === "tik-tok" && <TypeTiktokOnLightFalse className="instance-node-2" color={onLight ? "black" : "white"} />}

      {type === "you-tube" && (
        <TypeYoutubeOnLightTrue className="instance-node-2" color={onLight ? "black" : "white"} />
      )}

      {type === "facebook" && (
        <TypeFacebookOnLightTrue className="instance-node-2" color={onLight ? "black" : "white"} />
      )}

      {type === "spotfiy" && (
        <TypeSpotfiyOnLightFalse className="instance-node-2" color={onLight ? "black" : "white"} />
      )}

      {type === "vimeo" && <TypeVimeoOnLightFalse className="instance-node-2" color={onLight ? "black" : "white"} />}

      {type === "PDF" && <TypePdfOnLightFalse className="instance-node-2" color={onLight ? "black" : "white"} />}

      {type === "redirect" && (
        <TypeRedirectOnLightFalse className="instance-node-2" color={onLight ? "black" : "white"} />
      )}

      {["empty", "icon"].includes(type) && (
        <div className={`anchor-icon ${type} ${typeIconOnLightClassName}`}>{type === "icon" && <>{icon}</>}</div>
      )}
    </>
  );
};

AnchorIcon.propTypes = {
  type: PropTypes.oneOf(["facebook", "icon", "PDF", "you-tube", "empty", "vimeo", "redirect", "tik-tok", "spotfiy"]),
  onLight: PropTypes.bool,
};
