import { ChangeLineAnchor } from ".";

export default {
  title: "Components/ChangeLineAnchor",
  component: ChangeLineAnchor,
  argTypes: {
    type: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "preview",
    closed: true,
    className: {},
    line: "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-1-3.svg",
    lineStroke:
      "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--36.svg",
    img: "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/line-2--stroke--36.svg",
    iconsGeneral:
      "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/icons---general-9.svg",
    rectangle: "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/rectangle-1911-3.svg",
    vector: "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/vector-146-3.svg",
    frame: "https://generation-sessions.s3.amazonaws.com/1b44b504b504ee49e817127dd85ca88c/img/frame-4363.svg",
    text: "Changed Text",
  },
};
