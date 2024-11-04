import React, { useEffect, useState, useRef } from "react";
import CustomModal from "./modal";
import { useDispatch } from "react-redux";
import { removeTask } from "@/store/taskslice";
import { removeParticularTaskFromLocalStorage } from "@/utils/removetask";

const Menu = ({ id, setShowMenu, closeMenu }) => {
  const [showModal, SetShowModal] = useState(false);

  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.stopPropagation();
    SetShowModal((prevState) => !prevState); // Toggle the modal visibility
  };

  const handleDeleteTask = () => {
    dispatch(removeTask({ id }));
    removeParticularTaskFromLocalStorage(id);
  };

  // Handle outside click to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        console.log(
          "Yes Boy",
          menuRef.current && !menuRef.current.contains(event.target)
        );
        SetShowModal(false); // Close the modal if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="absolute left-[95%] max-sm:left-[85%] border border-[#ccc] flex flex-col  z-50 bg-white gap-[7px] p-1 rounded-md">
        <div
          className="w-[100%] flex justify-end p-0 m-0"
          onClick={() => closeMenu()}
        >
          x
        </div>
        <span
          className="text-[#8F98A8] hover:text-[black]  text-[15px]"
          onClick={handleEdit}
        >
          Edit
        </span>
        <span
          className="text-[#8F98A8] hover:text-[black]  text-[15px]"
          onClick={() => handleDeleteTask()}
        >
          Delete
        </span>
      </div>
      {showModal && (
        <CustomModal
          showModal={showModal}
          SetShowModal={SetShowModal}
          id={id}
          menuRef={menuRef}
          setShowMenu={setShowMenu}
          closeMenu={closeMenu}
        />
      )}
    </>
  );
};

export default Menu;
