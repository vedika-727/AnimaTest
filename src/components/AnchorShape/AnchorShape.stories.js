import { AnchorShape } from ".";

export default {
  title: "Components/AnchorShape",
  component: AnchorShape,
  argTypes: {
    type: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "circle",
    typeCircleClassName: {},
    ellipseClassName: {},
  },
};
