import type { Meta, StoryObj } from "@storybook/react-vite";

import { DesignSystem } from "./DesignSystem";

const meta = {
  title: "Design System",
  component: DesignSystem,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    type: "typography",
  },
} satisfies Meta<typeof DesignSystem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorPalettes: Story = {};
