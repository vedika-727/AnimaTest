import { AnchorIcon } from ".";

export default {
  title: "Components/AnchorIcon",
  component: AnchorIcon,
  argTypes: {
    type: {
      options: ["facebook", "icon", "PDF", "you-tube", "empty", "vimeo", "redirect", "tik-tok", "spotfiy"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "facebook",
    onLight: true,
    typeIconOnLightClassName: {},
  },
};
