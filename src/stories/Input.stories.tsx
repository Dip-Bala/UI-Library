import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;


export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This will be your public username",
    variant: "outlined",
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};


export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      <Input {...args} label="Outlined" variant="outlined" />
      <Input {...args} label="Filled" variant="filled" />
      <Input {...args} label="Ghost" variant="ghost" />
    </div>
  ),
  args: {
    placeholder: "Type here...",
  },
};


export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-80">
      <Input {...args} size="sm" label="Small" placeholder="Small input" />
      <Input {...args} size="md" label="Medium" placeholder="Medium input" />
      <Input {...args} size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
  args: {
    variant: "outlined",
  },
};


export const WithHelperText: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    helperText: "Must be at least 8 characters",
  },
};


export const DarkMode: Story = {
  args: {
    label: "Dark Mode Input",
    placeholder: "Type in dark mode",
    helperText: "This should adapt to dark mode",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
