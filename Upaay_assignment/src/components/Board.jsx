import React from "react";
import Column from "./Column";

const Board = ({ tasks, onUpdateTask }) => {
  const statuses = ["todo", "in-progress", "done"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {statuses.map((status) => (
        <Column
          key={status}
          status={status}
          tasks={tasks.filter((t) => t.status === status)}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </div>
  );
};

export default Board;
