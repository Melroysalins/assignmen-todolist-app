"use client";
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskdetails: [],
  },

  reducers: {
    addCurrentTask: (state, action) => {
      state.taskdetails = action.payload;
    },
    updateTask: (state, action) => {
      const { id, task, isCompleted } = action.payload;
      const index = state.taskdetails.findIndex((t) => t.id === id);

      // If task with the given id exists, update its properties
      if (index !== -1) {
        state.taskdetails[index] = {
          ...state.taskdetails[index], // Spread the existing task details
          task: task ?? state.taskdetails[index].task,
          isCompleted: isCompleted ?? state.taskdetails[index].isCompleted,
        };
      }
    },
    removeTask: (state, action) => {
      const { id } = action.payload;
      state.taskdetails = state.taskdetails.filter((task) => task.id !== id);
    },
    clearAllTasks: (state) => {
      state.taskdetails = [];
    },
  },
});

export const { addCurrentTask, updateTask, removeTask, clearAllTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
