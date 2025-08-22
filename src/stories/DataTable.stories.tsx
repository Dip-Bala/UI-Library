
import type { Meta, StoryObj } from "@storybook/react";
import DataTable, { type Column } from "../components/Data-Table/DataTable";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  location: string;
  department: string;
}


const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "firstName", title: "First Name", dataIndex: "firstName", sortable: true },
  { key: "lastName", title: "Last Name", dataIndex: "lastName", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
  { key: "role", title: "Role", dataIndex: "role" },
  { key: "status", title: "Status", dataIndex: "status" },
  { key: "location", title: "Location", dataIndex: "location" },
  { key: "department", title: "Department", dataIndex: "department" },
];


const data: User[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  firstName: `First${i + 1}`,
  lastName: `Last${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 2 === 0 ? "Admin" : "User",
  status: i % 3 === 0 ? "Active" : "Inactive",
  location: i % 2 === 0 ? "New York" : "London",
  department: i % 2 === 0 ? "Engineering" : "Design",
}));


const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;



export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data,
    selectable: true,
  },
};

export const SortedTable: Story = {
  args: {
    columns,
    data,
  },
  render: (args) => <DataTable {...args} />,
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};
