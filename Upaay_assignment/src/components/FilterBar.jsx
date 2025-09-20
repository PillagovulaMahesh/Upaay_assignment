import React from "react";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-3 items-center p-4 bg-white shadow rounded-lg">
      <label className="text-sm font-medium">Filter:</label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded-lg px-3 py-1"
      >
        <option value="all">All</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};

export default FilterBar;
