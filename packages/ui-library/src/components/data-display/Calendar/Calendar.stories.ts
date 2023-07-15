import type { Meta, StoryObj } from "@storybook/vue3";

import UniDatePicker from "./index.vue";

const meta = {
  title: "Data Display/DatePicker",
  component: UniDatePicker,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof UniDatePicker>;

export default meta;
type Story = StoryObj<typeof UniDatePicker>;

export const BasicUsage: Story = {
  render: () => ({
    components: { UniDatePicker },
    template: "<UniDatePicker />",
  }),
};
