import React, { useState } from "react";
import Input from "./components/Input/Input";
import DataTable, {type Column } from "./components/Data-Table/DataTable";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

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

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    defaultInput: "",
    filledInput: "",
    ghostInput: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const columns: Column<User>[] = [
    { key: "id", title: "ID", dataIndex: "id" },
    { key: "firstName", title: "First Name", dataIndex: "firstName" },
    { key: "lastName", title: "Last Name", dataIndex: "lastName" },
    { key: "email", title: "Email", dataIndex: "email" },
    { key: "role", title: "Role", dataIndex: "role" },
    { key: "status", title: "Status", dataIndex: "status" },
    { key: "location", title: "Location", dataIndex: "location" },
    { key: "department", title: "Department", dataIndex: "department" },
  ];

  const data: User[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      location: "New York",
      department: "Engineering",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Inactive",
      location: "London",
      department: "Design",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      role: "Manager",
      status: "Active",
      location: "Berlin",
      department: "Marketing",
    },
  ];

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen p-6 transition-colors`}>
      <div className="flex justify-end mb-6">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md bg-indigo-500 text-white hover:bg-blue-600 transition-colors cursor-pointer"
        >
          {darkMode ? <CiLight /> : <MdDarkMode />}
        </button>
      </div>

      {/* Inputs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <Input
          label="Default Input"
          placeholder="Enter text..."
          value={formData.defaultInput}
          onChange={handleInputChange("defaultInput")}
          variant="outlined"
          size="md"
          helperText="This is an outlined input"
        />
        <Input
          label="Filled Input"
          placeholder="Enter text..."
          value={formData.filledInput}
          onChange={handleInputChange("filledInput")}
          variant="filled"
          size="md"
          helperText="This is a filled input"
        />
        <Input
          label="Ghost Input"
          placeholder="Enter text..."
          value={formData.ghostInput}
          onChange={handleInputChange("ghostInput")}
          variant="ghost"
          size="md"
          helperText="This is a ghost input"
        />
        <Input
          label="Small Input"
          placeholder="Small input..."
          value={formData.defaultInput}
          onChange={handleInputChange("defaultInput")}
          variant="outlined"
          size="sm"
        />
        <Input
          label="Large Input"
          placeholder="Large input..."
          value={formData.defaultInput}
          onChange={handleInputChange("defaultInput")}
          variant="outlined"
          size="lg"
        />
        <Input
          label="Error Input"
          placeholder="Error..."
          value={formData.defaultInput}
          onChange={handleInputChange("defaultInput")}
          variant="outlined"
          size="md"
          invalid
          errorMessage="This field is required"
        />
      </div>

      {/* Data Table Section */}
      <div className="overflow-x-auto mt-8">
        <DataTable columns={columns} data={data} selectable />
      </div>
    </div>
  );
};

export default App;
