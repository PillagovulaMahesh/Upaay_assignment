import React from "react";
import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

const Column = ({ status, tasks, onUpdateTask }) => {
  const titleMap = {
    "todo": "To Do",
    "in-progress": "In Progress",
    "done": "Done",
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow">
      <h3 className="text-lg font-semibold mb-4">{titleMap[status]}</h3>
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onUpdateTask={onUpdateTask} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Column;
