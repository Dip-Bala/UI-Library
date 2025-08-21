import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

interface SortConfig<T> {
  key: keyof T;
  direction: "asc" | "desc";
}

export default function DataTable<T>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);

  function handleSelectRow(row: T) {
    let updated: T[];
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter((r) => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated); 
  }

  function handleSort(key: keyof T) {
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      setSortConfig({ key, direction: "desc" });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  }

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);

  if (loading) {
    return <div className="p-4 text-gray-500">Loading...</div>;
  }

  if (data.length === 0) {
    return <div className="p-4 text-gray-500">No data available</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full rounded-md shadow text-sm sm:text-base">
        <thead className="bg-white dark:bg-gray-950">
          <tr>
            {selectable && <th className="px-2 sm:px-4 py-2"></th>}
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-2 sm:px-4 py-2 text-left cursor-pointer text-slate-700 font-medium dark:text-white whitespace-nowrap"
                onClick={() => col.sortable && handleSort(col.dataIndex)}
              >
                <span className="flex items-center gap-2">
                  {col.title}
                  {sortConfig?.key === col.dataIndex && (
                    <span>
                      {sortConfig.direction === "asc" ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="even:bg-white odd:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950 dark:text-white/70"
            >
              {selectable && (
                <td className="px-2 sm:px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row)}
                    onChange={() => handleSelectRow(row)}
                    className="h-4 w-4 cursor-pointer rounded-md border-2 border-gray-300 dark:border-gray-600 
                      checked:bg-indigo-500 checked:border-indigo-500 
                      focus:ring-0 focus:ring-offset-0
                      dark:checked:bg-indigo-400 dark:checked:border-indigo-400 
                      transition-colors"
                  />
                </td>
              )}
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-2 sm:px-4 py-2 whitespace-nowrap"
                >
                  {String(row[col.dataIndex])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
