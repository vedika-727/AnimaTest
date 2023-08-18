import { LeadingIconButton } from ".";

export default {
  title: "Components/LeadingIconButton",
  component: LeadingIconButton,
  argTypes: {
    property1: {
      options: ["i-default-hover", "i-deactivated", "i-no-stroke", "i-default", "i-dropdown-hover", "i-dropdown"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "i-default-hover",
    className: {},
    visible: true,
    divClassName: {},
    text: "Add URL Extension",
  },
};
