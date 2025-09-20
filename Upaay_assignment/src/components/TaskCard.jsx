import React from "react";

const TaskCard = ({ task, onUpdateTask }) => {
  const nextStatus = {
    "todo": "in-progress",
    "in-progress": "done",
    "done": "done",
  };

  return (
    <div className="bg-white rounded-lg shadow p-3 flex flex-col gap-2">
      <h4 className="font-semibold">{task.title}</h4>
      {task.desc && <p className="text-sm text-gray-600">{task.desc}</p>}
      <button
        onClick={() => onUpdateTask(task.id, nextStatus[task.status])}
        disabled={task.status === "done"}
        className={`mt-2 px-3 py-1 rounded-lg text-sm ${
          task.status === "done"
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
      >
        {task.status === "done" ? "Completed" : "Move Next"}
      </button>
    </div>
  );
};

export default TaskCard;
