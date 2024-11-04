import { clearAllTasks } from "@/store/taskslice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Divider = () => {
  const taskLength = useSelector((store) => store?.task?.taskdetails);

  const dispatch = useDispatch();

  const handleTaskClear = () => {
    dispatch(clearAllTasks());
    localStorage.clear(); // to clear the data stored in localStorage
  };

  return (
    <div className="border border-t-[#EEEEEE] border-b-0 border-r-0 border-l-0 mt-8">
      <div className="flex align-middle items-center mt-2 justify-between p-1">
        <span className="text-[#B1BACB] hover:text-black cursor-pointer">
          {taskLength?.length > 0 ? `${taskLength?.length} items` : "0 items"}{" "}
        </span>
        <span
          className="text-[#B1BACB]  hover:text-black cursor-pointer"
          onClick={() => handleTaskClear()}
        >
          Clear All
        </span>
      </div>
    </div>
  );
};

export default Divider;
