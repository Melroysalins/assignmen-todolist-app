"use client";
import { configureStore, createStore } from "@reduxjs/toolkit";
import taskSlice from "./taskslice";

export const appstore = configureStore({
  reducer: {
    task: taskSlice,
  },
});
