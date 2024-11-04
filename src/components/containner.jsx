"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import InputBox from "./inputbox";
import TaskList from "./tasklist";
import Divider from "./divider";
import CustomizedSnackbars from "./snackbar";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTask } from "@/store/taskslice";
import { generateRandomIds } from "@/utils/generateid";

const Containner = () => {
  const taskSelector = useSelector((store) => store?.task?.taskdetails);
  const [inputValue, SetInputValue] = useState("");
  const [error, SetError] = useState("");
  const [open, SetOpen] = useState(false);
  const [severity, SetSeverity] = useState("");
  const [message, SetMessage] = useState("");
  const [activeTaskId, setActiveTaskId] = useState(null);

  const dispatch = useDispatch();

  const handleInputValue = (e) => {
    SetInputValue(e.target.value);
  };

  const handleAddTask = () => {
    console.log(!inputValue?.length, inputValue?.length);
    if (!inputValue?.length) {
      SetMessage("Task cannot be Empty!!");
      SetSeverity("error");
      SetOpen(true);
    } else {
      SetMessage("Task has been added successfully");
      SetSeverity("success");
      SetOpen(true);
      let newTask = {
        task: inputValue,
        isCompleted: false,
        id: generateRandomIds(),
      };

      let updatedTasks = [...taskSelector, newTask];
      SetInputValue("");
      dispatch(addCurrentTask(updatedTasks));
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  useEffect(() => {
    dispatch(addCurrentTask(JSON.parse(localStorage?.getItem("tasks"))));
  }, []);

  const closeMenu = () => {
    setActiveTaskId(null); // Function to close the menu
  };

  return (
    <div className="w-[1000px] max-lg:w-[800px] max-md:w-[600px] max-sm:w-[100%] max-sm:mt-0 max-sm:h-[100vh] max-sm:rounded-none bg-white border rounded-[32px] mt-[150px] h-[670px] shadow-custom-shadow flex justify-center align-middle overflow-clip">
      <div className=" w-[600px] flex flex-col max-md:[450px] max-md:p-4 max-sm:w-[100%]">
        <div className=" mt-[80px]">
          <Header />
          <InputBox
            inputValue={inputValue}
            onchange={handleInputValue}
            onclick={handleAddTask}
          />
          <TaskList
            activeTaskId={activeTaskId}
            setActiveTaskId={setActiveTaskId}
            closeMenu={closeMenu}
          />
          <Divider />
        </div>
      </div>
      <CustomizedSnackbars
        open={open}
        severity={severity}
        message={message}
        SetOpen={SetOpen}
      />
    </div>
  );
};

export default Containner;
