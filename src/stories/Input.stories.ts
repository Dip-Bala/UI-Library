import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
  },
};

// export const Variants: Story = {
//   render: (args) => (
//     <div className="flex flex-col gap-6 w-80 p-4 bg-white dark:bg-gray-900">
//       <div className="flex flex-col gap-4">
//         <Input {...args} label="Default" placeholder="Enter text" variant="default" />
//         <Input {...args} label="Filled" placeholder="Enter text" variant="filled" />
//         <Input {...args} label="Ghost" placeholder="Enter text" variant="ghost" />
//       </div>

//       <div className="flex flex-col gap-4">
//         <Input {...args} label="Small" placeholder="sm input" size="sm" />
//         <Input {...args} label="Medium" placeholder="md input" size="md" />
//         <Input {...args} label="Large" placeholder="lg input" size="lg" />
//       </div>
//     </div>
//   ),
// };
// export const Sizes: Story = {
//   args: {
//     placeholder: "Type here...",
//     variant: "default",
//   },
//   render: (args) => (
//     <div className="flex flex-col gap-4 w-80">
//       <Input {...args} size="sm" label="Small" />
//       <Input {...args} size="md" label="Medium" />
//       <Input {...args} size="lg" label="Large" />
//     </div>
//   ),
// };

export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This will be your public username",
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

// ✅ Disabled State
export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "Can't type here",
    disabled: true,
  },
};

// ✅ Dark Mode Showcase
export const DarkMode: Story = {
  args: {
    label: "Dark Mode Input",
    placeholder: "Type in dark mode",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
