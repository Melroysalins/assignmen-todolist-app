import React from "react";
import Task from "./task";
import { useSelector } from "react-redux";

const TaskList = ({ activeTaskId, setActiveTaskId, closeMenu }) => {
  const taskSelector = useSelector((store) => store?.task?.taskdetails);

  const handleMenuOpen = (taskId) => {
    if (activeTaskId === taskId) {
      setActiveTaskId(null);
    } else {
      setActiveTaskId(taskId);
    }
  };

  return (
    <div className="mt-[20px] flex flex-col p-5 gap-3">
      {taskSelector?.length > 0 &&
        taskSelector?.map((task, index) => (
          <Task
            key={index}
            data={task}
            isMenuOpen={activeTaskId === task?.id}
            onclick={handleMenuOpen}
            closeMenu={closeMenu}
          />
        ))}
    </div>
  );
};

export default TaskList;
