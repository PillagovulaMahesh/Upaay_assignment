import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import Board from "../components/Board";
import AddTaskModal from "../components/AddTaskModal";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Add a new task
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // ✅ Update task status
  const handleUpdateTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  // ✅ Filter tasks
  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Filter Bar */}
      <div className="p-4">
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      {/* Kanban Board */}
      <Board tasks={filteredTasks} onUpdateTask={handleUpdateTask} />

      {/* Add Task Modal */}
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default Dashboard;
