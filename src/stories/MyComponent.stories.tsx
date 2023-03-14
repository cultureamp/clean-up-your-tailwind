import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MyComponent } from "../components/MyComponent";

export default {
  title: "",
  component: MyComponent,
} as ComponentMeta<typeof MyComponent>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MyComponent> = (args) => (
  <MyComponent {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: "Hello world",
};
