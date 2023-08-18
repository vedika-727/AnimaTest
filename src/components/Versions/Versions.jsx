/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon16Px9 } from "../../icons/Icon16Px9";
import { IconPreviewLightTrue } from "../../icons/IconPreviewLightTrue";
import { IconsControls4 } from "../../icons/IconsControls4";
import { IconsControls5 } from "../../icons/IconsControls5";
import { IconsGeneral2 } from "../../icons/IconsGeneral2";
import { IconsGeneral6 } from "../../icons/IconsGeneral6";
import { IconsNavbars4 } from "../../icons/IconsNavbars4";
import { IconsStats3 } from "../../icons/IconsStats3";
import { TheIcon5 } from "../../icons/TheIcon5";
import { Anchor } from "../Anchor";
import { ChangeLineAnchor } from "../ChangeLineAnchor";
import { LeadingIconButton } from "../LeadingIconButton";
import "./style.css";

export const Versions = ({
  expanded,
  first,
  disconnected,
  last,
  topPerformer,
  className,
  text = "v4",
  anchorAnchorShapeEllipseClassName,
  anchorAnchorIconIcon = <TheIcon5 className="the-icon-5" color="white" />,
  anchorAnchorShapeType = "circle",
  text1 = "6 Changes",
  text2 = "Updated Sep 26",
  anchorAnchorShapeEllipseClassNameOverride,
  override = <TheIcon5 className="the-icon-5" color="white" />,
  anchorAnchorShapeType1 = "circle",
  text3 = "Sep 26",
  anchorAnchorShapeRectangleClassName,
  anchorAnchorIconIcon1 = <TheIcon5 className="the-icon-5" color="white" />,
}) => {
  return (
    <div className={`versions ${className}`}>
      {expanded && (
        <>
          <div className="frame-6">
            <div className="accordion">
              <img
                className="instance-node-3"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/frame-4358-7.svg"
              />
              <div className="text-wrapper-3">{text}</div>
            </div>
            <div className="frame-7">
              <Anchor
                anchorIconIcon={<TheIcon5 className="the-icon-5" color="white" />}
                anchorIconTypeIconOnLightClassName="anchor-2"
                anchorShapeEllipseClassName="anchor-instance"
                anchorShapeType="circle"
                anchorShapeTypeCircleClassName="anchor-4"
                className="anchor-3"
                hasText={false}
                large={false}
                overlapGroupClassName="anchor-3"
                padding={false}
              />
              {last && (
                <div className="frame-8">
                  <div className="text-wrapper-4">{text1}</div>
                  <div className="text-wrapper-5">{text2}</div>
                </div>
              )}

              {!last && (
                <>
                  <div className={`frame-9 top-performer-${topPerformer}`}>
                    <div className="element-changes">
                      {!topPerformer && <>{text1}</>}

                      {topPerformer && <div className="text-wrapper-6">Best Average Performance</div>}
                    </div>
                    <div className="updated-sep">
                      {!topPerformer && <>{text2}</>}

                      {topPerformer && (
                        <>
                          <div className="text-wrapper-4">{text1}</div>
                          <div className="text-wrapper-5">{text2}</div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="frame-10">
                    <div className="leading-icon-button-wrapper">
                      <div className="icons-navbars-wrapper">
                        <IconPreviewLightTrue className="instance-node-3" color="white" />
                      </div>
                    </div>
                    <div className="leading-icon-button-wrapper">
                      <LeadingIconButton
                        className="leading-icon-button-styles-13pt-32-height"
                        divClassName="leading-icon-button-instance"
                        icon={<Icon16Px9 className="instance-node-3" color="white" />}
                        property1="i-default"
                        text="Revert"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            {last && (
              <LeadingIconButton
                className="leading-icon-button-styles-13pt-32-height-instance"
                divClassName="leading-icon-button-instance"
                property1="i-default"
                text="Current"
                visible={false}
              />
            )}
          </div>
          <ChangeLineAnchor
            className="change-line-ANCHOR-instance"
            closed={false}
            icon={<IconsControls4 className="instance-node-3" />}
            img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            type="visibility"
          />
          <ChangeLineAnchor
            className="change-line-ANCHOR-instance"
            closed={false}
            icon={<IconsControls5 className="instance-node-3" />}
            img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            type="position"
          />
          <ChangeLineAnchor
            className="change-line-ANCHOR-instance"
            closed={false}
            icon={<IconsGeneral2 className="instance-node-3" />}
            img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            type="size"
          />
          <ChangeLineAnchor
            className="change-line-ANCHOR-instance"
            closed={false}
            iconsGeneral="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/icons---general-12.svg"
            img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            type="shape"
          />
          <ChangeLineAnchor
            className="change-line-ANCHOR-instance"
            closed={false}
            img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            rectangle="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/rectangle-1911-4.svg"
            type="color"
            vector="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-146-4.svg"
          />
          <ChangeLineAnchor
            className="change-line-ANCHOR-instance"
            closed={false}
            icon={<IconsStats3 className="instance-node-3" />}
            img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            type="CTA"
          />
          <ChangeLineAnchor
            className="change-line-ANCHOR-instance"
            closed={false}
            icon={<IconsNavbars4 className="instance-node-3" />}
            img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
            type="preview"
          />
        </>
      )}

      {!last && disconnected && (
        <img
          className="change-line"
          alt="Change line"
          src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/change-line-1.svg"
        />
      )}

      {!expanded && !first && (
        <div className={`frame-11 disconnected-${disconnected}`}>
          {last && !disconnected && (
            <div className="accordion-2">
              <img
                className="instance-node-3"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/frame-4358-9.svg"
              />
              <div className="text-wrapper-3">{text}</div>
            </div>
          )}

          {(disconnected || !last) && (
            <div className="accordion-3">
              {!disconnected && (
                <>
                  <img
                    className="instance-node-3"
                    alt="Frame"
                    src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/frame-4358-9.svg"
                  />
                  <div className="text-wrapper-3">{text}</div>
                </>
              )}

              {disconnected && <IconsGeneral6 className="instance-node-3" />}
            </div>
          )}

          <div className="frame-12">
            {!disconnected && (
              <>
                <Anchor
                  anchorIconIcon={!last ? override : anchorAnchorIconIcon}
                  anchorIconTypeIconOnLightClassName="anchor-2"
                  anchorShapeEllipseClassName={
                    !last ? anchorAnchorShapeEllipseClassNameOverride : anchorAnchorShapeEllipseClassName
                  }
                  anchorShapeType={!last ? anchorAnchorShapeType1 : anchorAnchorShapeType}
                  anchorShapeTypeCircleClassName="anchor-4"
                  className="anchor-3"
                  hasText={false}
                  large={false}
                  overlapGroupClassName="anchor-3"
                  padding={false}
                />
                <div className={`frame-13 top-performer-2-${topPerformer}`}>
                  <div className="element-changes-2">
                    {!topPerformer && <>{text1}</>}

                    {topPerformer && <div className="text-wrapper-6">Best Average Performance</div>}
                  </div>
                  <div className="updated-sep-2">
                    {!topPerformer && <>{text2}</>}

                    {topPerformer && (
                      <>
                        <div className="text-wrapper-4">{text1}</div>
                        <div className="text-wrapper-5">{text2}</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="frame-14" />
              </>
            )}

            {disconnected && (
              <div className="frame-8">
                <div className="text-wrapper-4">Disconnected</div>
                <div className="text-wrapper-5">{text3}</div>
              </div>
            )}
          </div>
          {last && !disconnected && (
            <LeadingIconButton
              className="leading-icon-button-styles-13pt-32-height-instance"
              divClassName="leading-icon-button-instance"
              property1="i-default"
              text="Current"
              visible={false}
            />
          )}
        </div>
      )}

      {disconnected && (
        <div className="change-line-2">
          <div className="bullet-wrapper">
            <div className="bullet-3">
              <img
                className="line-stroke-2"
                alt="Line stroke"
                src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-1--stroke--44.svg"
              />
              <div className="group-wrapper">
                <div className="group">
                  <div className="overlap-group-3">
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                  </div>
                </div>
              </div>
              <img
                className="line-stroke-2"
                alt="Line stroke"
                src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--44.svg"
              />
            </div>
          </div>
          <div className="text-wrapper-7">11:37 AM</div>
        </div>
      )}

      {first && (
        <div className="frame-15">
          <div className="div-wrapper">
            <div className="text-wrapper-3">v1</div>
          </div>
          <div className="frame-7">
            <Anchor
              anchorIconIcon={anchorAnchorIconIcon1}
              anchorIconTypeIconOnLightClassName="anchor-2"
              anchorShapeEllipseClassName={anchorAnchorShapeRectangleClassName}
              anchorShapeType="circle"
              anchorShapeTypeCircleClassName="anchor-4"
              className="anchor-3"
              hasText={false}
              large={false}
              overlapGroupClassName="anchor-3"
              padding={false}
            />
            <div className="frame-8">
              <div className="text-wrapper-4">Anchor Created</div>
              <div className="text-wrapper-5">{text3}</div>
            </div>
            <div className="leading-icon-button-wrapper">
              <LeadingIconButton
                className="leading-icon-button-2"
                divClassName="leading-icon-button-instance"
                property1="i-default"
                text="Revert"
              />
            </div>
          </div>
        </div>
      )}

      {!expanded && !first && !disconnected && (
        <ChangeLineAnchor
          className="change-line-ANCHOR-instance"
          closed
          line="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-1-6.svg"
          type="visibility"
        />
      )}
    </div>
  );
};

Versions.propTypes = {
  expanded: PropTypes.bool,
  first: PropTypes.bool,
  disconnected: PropTypes.bool,
  last: PropTypes.bool,
  topPerformer: PropTypes.bool,
  text: PropTypes.string,
  anchorAnchorShapeType: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  anchorAnchorShapeType1: PropTypes.string,
  text3: PropTypes.string,
};
