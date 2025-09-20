import React, { useState } from "react";

const AddTaskModal = ({ isOpen, onClose, onAddTask }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask({ id: Date.now(), title, desc, status: "todo" });
    setTitle("");
    setDesc("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Task title"
            className="border rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task description"
            className="border rounded-lg p-2"
            rows="3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 rounded-lg border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 rounded-lg bg-blue-600 text-white"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
