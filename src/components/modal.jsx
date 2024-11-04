import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch } from "react-redux";
import { updateTask } from "@/store/taskslice";
import { updateTaskInLocalStorage } from "@/utils/updatetask";

export default function CustomModal({
  setShowMenu,
  SetShowModal,
  id,
  closeMenu,
}) {
  const [showOptions, SetShowOptions] = React.useState(false);
  const [inputValue, SetInputvalue] = React.useState("");
  const [completed, SetCompleted] = React.useState("");

  const allTaskList = JSON.parse(localStorage.getItem("tasks"));

  const task = allTaskList?.filter((item) => item?.id === id);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (task) {
      SetInputvalue(task?.[0]?.task || ""); // Provide fallback empty string
      SetCompleted(task?.[0]?.isCompleted || false); // Provide fallback value for `isCompleted`
    }
  }, [id]);

  const handleIsCompleted = (value) => {
    SetCompleted(value);
    SetShowOptions(false);
  };

  const handleSaveEditedTask = () => {
    dispatch(
      updateTask({
        id: id,
        task: inputValue,
        isCompleted: completed,
      })
    );
    SetShowModal(false);
    updateTaskInLocalStorage(id, inputValue, completed);
    closeMenu();
  };

  return (
    <div
      className="fixed top-0 left-0 w-[100%] h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-[20px]"
      onClick={(e) => SetShowModal(false)} // Close modal when background is clicked
    >
      <div
        className="bg-white p-5 rounded-[20px] shadow-md w-[600px] h-[300px]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when modal is clicked
      >
        <h2 className="text-[27px] font-bold mb-4">Edit Task</h2>
        <div className="flex flex-col items-start mt-[19px] gap-[16px]">
          <input
            type="text"
            className="border border-[#ccc] w-[80%] p-2 rounded-md"
            value={inputValue}
            onChange={(e) => SetInputvalue(e.target.value)}
          />
        </div>

        <div className="w-[80%] border border-[#ccc] mt-[19px] p-2 rounded-md flex justify-between relative">
          <span>{completed ? "true" : "false"}</span>
          {!showOptions ? (
            <ArrowDropDownIcon
              onClick={(e) => {
                e.stopPropagation(); // Ensure this doesn't close the modal
                SetShowOptions(true);
              }}
            />
          ) : (
            <ArrowDropUpIcon
              onClick={(e) => {
                e.stopPropagation(); // Ensure this doesn't close the modal
                SetShowOptions(false);
              }}
            />
          )}
          {showOptions && (
            <ul className="absolute w-[100%] mt-2 bg-white top-[100%] border border-[#ccc] rounded-md p-2 left-0 right-0 flex flex-col gap-3">
              <li
                className="p-1 hover:bg-[#ccc] rounded-[5px]"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent menu from closing the modal
                  handleIsCompleted(true);
                }}
              >
                True
              </li>
              <li
                className="p-1 hover:bg-[#ccc] rounded-[5px]"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent menu from closing the modal
                  handleIsCompleted(false);
                }}
              >
                False
              </li>
            </ul>
          )}
        </div>

        <div className="flex justify-center mt-[40px]">
          <button
            className="bg-[#2D70FD] p-3 cursor-pointer text-white rounded-md w-[160px] hover:opacity-85"
            onClick={(e) => {
              e.stopPropagation(); // Prevent button click from closing the modal
              handleSaveEditedTask();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
