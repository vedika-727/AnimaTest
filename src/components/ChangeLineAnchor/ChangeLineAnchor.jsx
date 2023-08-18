/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsControls6 } from "../../icons/IconsControls6";
import { IconsMoments } from "../../icons/IconsMoments";
import "./style.css";

export const ChangeLineAnchor = ({
  type,
  closed,
  className,
  line = "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-1-3.svg",
  lineStroke = "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--36.svg",
  img = "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--36.svg",
  icon = <IconsControls6 className="icons-controls" />,
  iconsGeneral = "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/icons---general-9.svg",
  rectangle = "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/rectangle-1911-3.svg",
  vector = "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-146-3.svg",
  frame = "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/frame-4363.svg",
  text = "Changed Text",
}) => {
  return (
    <div className={`change-line-ANCHOR closed-${closed} ${className}`}>
      <div className="frame-2">
        {closed && (
          <div className="bullet">
            <img className="line" alt="Line" src={line} />
          </div>
        )}

        {!closed && (
          <>
            <div className="bullet-2">
              <img className="line-stroke" alt="Line stroke" src={lineStroke} />
              <div className="rectangle" />
              <img className="line-stroke" alt="Line stroke" src={img} />
            </div>
            <div className="frame-3">
              {(type === "CTA" ||
                type === "content" ||
                type === "hover" ||
                type === "icon" ||
                type === "position" ||
                type === "preview" ||
                type === "size" ||
                type === "visibility") && <>{icon}</>}

              {["opacity", "shape", "text"].includes(type) && (
                <img
                  className="icons-controls"
                  alt="Icons general"
                  src={
                    type === "opacity"
                      ? "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/icons---general-10.svg"
                      : type === "text"
                      ? frame
                      : iconsGeneral
                  }
                />
              )}

              {(type === "CTA" ||
                type === "content" ||
                type === "hover" ||
                type === "icon" ||
                type === "opacity" ||
                type === "position" ||
                type === "preview" ||
                type === "shape" ||
                type === "size" ||
                type === "text" ||
                type === "visibility") && (
                <div className="div-2">
                  {type === "visibility" && <>Set Desktop to Hidden</>}

                  {type === "position" && <>Moved Position</>}

                  {type === "size" && <>Changed Size</>}

                  {type === "icon" && <>Changed Icon</>}

                  {type === "CTA" && <>Changed Primary CTA</>}

                  {type === "hover" && <>Changed Hovr State</>}

                  {type === "content" && <>Changed Content</>}

                  {type === "preview" && <>Changed Video Preview</>}

                  {type === "shape" && <>Changed Shape</>}

                  {type === "opacity" && <>Changed Opacity</>}

                  {type === "text" && <>{text}</>}
                </div>
              )}

              {["animation", "color", "moment-type"].includes(type) && (
                <>
                  <div className={`frame-4 ${type}`}>
                    {["animation", "color"].includes(type) && (
                      <div className="frame-5">
                        {type === "color" && (
                          <div className="overlap-group-2">
                            <div className="rectangle-2" />
                            <img className="img" alt="Rectangle" src={rectangle} />
                            <img className="vector" alt="Vector" src={vector} />
                          </div>
                        )}

                        {type === "animation" && (
                          <>
                            <div className="ellipse-2" />
                            <img
                              className="vector-2"
                              alt="Vector"
                              src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-143.svg"
                            />
                            <img
                              className="vector-3"
                              alt="Vector"
                              src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-144.svg"
                            />
                            <img
                              className="vector-4"
                              alt="Vector"
                              src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-145.svg"
                            />
                          </>
                        )}
                      </div>
                    )}

                    {type === "moment-type" && <IconsMoments className="icons-controls" />}
                  </div>
                  <div className="div-2">
                    {type === "color" && <>Changed Color</>}

                    {type === "animation" && <>Changed Animation</>}

                    {type === "moment-type" && <p className="p">Changed from Highlight to Anchor</p>}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
      {!closed && <div className="text-wrapper-2">11:37 AM</div>}
    </div>
  );
};

ChangeLineAnchor.propTypes = {
  type: PropTypes.oneOf([
    "preview",
    "size",
    "moment-type",
    "color",
    "icon",
    "CTA",
    "content",
    "visibility",
    "animation",
    "position",
    "hover",
    "text",
    "opacity",
    "shape",
  ]),
  closed: PropTypes.bool,
  line: PropTypes.string,
  lineStroke: PropTypes.string,
  img: PropTypes.string,
  iconsGeneral: PropTypes.string,
  rectangle: PropTypes.string,
  vector: PropTypes.string,
  frame: PropTypes.string,
  text: PropTypes.string,
};
