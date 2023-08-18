import React from "react";
import { AnchorIcon } from "../../components/AnchorIcon";
import { ChangeLineAnchor } from "../../components/ChangeLineAnchor";
import { LeadingIconButton } from "../../components/LeadingIconButton";
import { Versions } from "../../components/Versions";
import { AnchorIcons1 } from "../../icons/AnchorIcons1";
import { Icon16Px9 } from "../../icons/Icon16Px9";
import { IconPreviewLightTrue } from "../../icons/IconPreviewLightTrue";
import { IconsControls4 } from "../../icons/IconsControls4";
import { IconsControls5 } from "../../icons/IconsControls5";
import { IconsGeneral2 } from "../../icons/IconsGeneral2";
import { IconsStats3 } from "../../icons/IconsStats3";
import { TheIcon5 } from "../../icons/TheIcon5";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="graph-holder">
        <div className="text-wrapper-8">Version Performance</div>
        <div className="div-3">
          <div className="div-4">
            <div className="div-wrapper-2">
              <div className="text-wrapper-9">Anchor Seen</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-10">Hovers</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-10">Avg Watchtime</div>
            </div>
            <div className="div-wrapper-3">
              <div className="text-wrapper-10">CTA Clicks</div>
            </div>
          </div>
          <div className="group-wrapper-2">
            <div className="group-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-4">
                  <img
                    className="lines"
                    alt="Lines"
                    src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/lines.svg"
                  />
                  <img
                    className="vector-5"
                    alt="Vector"
                    src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-123.svg"
                  />
                  <div className="group-3">
                    <div className="text-wrapper-11">v1</div>
                    <div className="rectangle-5" />
                  </div>
                  <div className="group-4">
                    <div className="text-wrapper-11">v2</div>
                    <div className="rectangle-6" />
                  </div>
                  <div className="group-5">
                    <div className="text-wrapper-11">v3</div>
                    <div className="rectangle-6" />
                  </div>
                  <div className="group-6">
                    <div className="text-wrapper-11">v4</div>
                    <div className="rectangle-7" />
                  </div>
                  <div className="group-7">
                    <div className="text-wrapper-11">v5</div>
                    <div className="rectangle-7" />
                  </div>
                </div>
              </div>
              <div className="div-5">
                <div className="text-wrapper-12">125</div>
                <div className="text-wrapper-13">100</div>
                <div className="text-wrapper-14">75</div>
                <div className="text-wrapper-14">50</div>
                <div className="text-wrapper-14"> 25</div>
              </div>
              <div className="div-6">
                <div className="text-wrapper-15">8/26</div>
                <div className="text-wrapper-15">9/2</div>
                <div className="text-wrapper-15">9/12</div>
                <div className="text-wrapper-15">9/19</div>
                <div className="text-wrapper-15">9/26</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="graph-holder">
        <div className="div-7">
          <div className="text-wrapper-8">Versions</div>
          <div className="div-8">
            <img
              className="icon-instance-node"
              alt="Minimize"
              src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/minimize-2.svg"
            />
            <div className="text-wrapper-16">Collapse All</div>
          </div>
        </div>
        <div className="div-9">
          <Versions
            anchorAnchorIconIcon={<TheIcon5 className="icon-instance-node-2" color="white" />}
            anchorAnchorShapeEllipseClassName="versions-instance"
            anchorAnchorShapeType="square"
            className="design-component-instance-node"
            disconnected={false}
            expanded={false}
            first={false}
            last
            text="v5"
            text1="1 Change"
            text2="Updated on Sep 29"
            topPerformer={false}
          />
          <div className="versions-2">
            <div className="div-10">
              <div className="accordion-4">
                <img
                  className="icon-instance-node"
                  alt="Frame"
                  src="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/frame-4358-7.svg"
                />
                <div className="text-wrapper-17">v4</div>
              </div>
              <div className="div-11">
                <div className="anchor-5">
                  <AnchorIcon
                    icon={<TheIcon5 className="icon-instance-node-2" color="white" />}
                    onLight={false}
                    type="icon"
                    typeIconOnLightClassName="anchor-icon-instance"
                  />
                  <div className="text-wrapper-18">View All Review</div>
                </div>
                <div className="div-12">
                  <div className="text-wrapper-19">6 Changes</div>
                  <div className="text-wrapper-20">Updated Sep 26</div>
                </div>
                <div className="div-13">
                  <div className="leading-icon-button-wrapper-2">
                    <div className="leading-icon-button-3">
                      <IconPreviewLightTrue className="icon-instance-node" color="white" />
                    </div>
                  </div>
                  <div className="leading-icon-button-wrapper-2">
                    <LeadingIconButton
                      className="leading-icon-button-4"
                      divClassName="leading-icon-button-5"
                      icon={<Icon16Px9 className="icon-instance-node" color="white" />}
                      property1="i-default"
                      text="Revert"
                    />
                  </div>
                </div>
              </div>
            </div>
            <ChangeLineAnchor
              className="design-component-instance-node"
              closed={false}
              icon={<IconsControls4 className="icon-instance-node" />}
              img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              type="visibility"
            />
            <ChangeLineAnchor
              className="design-component-instance-node"
              closed={false}
              icon={<IconsControls5 className="icon-instance-node" />}
              img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              type="position"
            />
            <ChangeLineAnchor
              className="design-component-instance-node"
              closed={false}
              icon={<IconsGeneral2 className="icon-instance-node" />}
              img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              type="size"
            />
            <ChangeLineAnchor
              className="design-component-instance-node"
              closed={false}
              iconsGeneral="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/icons---general-12.svg"
              img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              type="shape"
            />
            <ChangeLineAnchor
              className="design-component-instance-node"
              closed={false}
              img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              rectangle="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/rectangle-1911-4.svg"
              type="color"
              vector="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-146-4.svg"
            />
            <ChangeLineAnchor
              className="design-component-instance-node"
              closed={false}
              icon={<IconsStats3 className="icon-instance-node" />}
              img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              type="CTA"
            />
            <ChangeLineAnchor
              className="design-component-instance-node"
              closed={false}
              frame="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/frame-4363-1.svg"
              img="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              lineStroke="https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--43.svg"
              text="Added Text"
              type="text"
            />
          </div>
          <Versions
            anchorAnchorShapeEllipseClassNameOverride="versions-3"
            anchorAnchorShapeType1="square"
            className="design-component-instance-node"
            disconnected={false}
            expanded={false}
            first={false}
            last={false}
            override={<TheIcon5 className="icon-instance-node-2" color="black" />}
            text="v3"
            text1="6 Changes"
            text2="Updated on Sep 14"
            topPerformer
          />
          <Versions
            className="design-component-instance-node"
            disconnected
            expanded={false}
            first={false}
            last={false}
            text3="on Sep 12"
            topPerformer={false}
          />
          <Versions
            anchorAnchorIconIcon={<TheIcon5 className="icon-instance-node-2" color="black" />}
            anchorAnchorShapeEllipseClassName="versions-4"
            anchorAnchorShapeType="square"
            className="design-component-instance-node"
            disconnected={false}
            expanded={false}
            first={false}
            last
            text="v2"
            text1="6 Changes"
            text2="Updated on Aug 29"
            topPerformer={false}
          />
          <Versions
            anchorAnchorIconIcon1={<AnchorIcons1 className="icon-instance-node-2" />}
            anchorAnchorShapeRectangleClassName="versions-5"
            className="design-component-instance-node"
            disconnected={false}
            expanded={false}
            first
            last={false}
            text3="on Aug 21"
            topPerformer={false}
          />
        </div>
      </div>
    </div>
  );
};
