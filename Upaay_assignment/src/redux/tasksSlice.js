import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Sample Task",
      description: "This is a demo task to get you started.",
      status: "todo", // todo | in-progress | done
      priority: "medium",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    updateTaskStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.status = newStatus;
      }
    },
    updateTask: (state, action) => {
      const { id, updates } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, updateTaskStatus, updateTask, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
