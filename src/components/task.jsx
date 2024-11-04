import React, { useEffect, useRef, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import Menu from "./menu";

const Task = ({ data, onclick, isMenuOpen, closeMenu }) => {
  return (
    <div
      className="flex align-middle cursor-pointer relative items-center gap-[14px] group"
      onClick={() => onclick(data?.id)}
    >
      {data?.isCompleted ? (
        <>
          <div className="w-[32px] h-[32px] bg-[#00D8A7] border border-[#EEEEEE] flex items-center align-middle justify-center text-center rounded-[50%] group-hover:border-[#2D70FD26]">
            <DoneIcon style={{ fontSize: "17px", color: "white" }} />
          </div>
          <span className="text-[16px] text-[#8F98A8] cursor-pointer group-hover:text-[#2D70FD] font-medium line-through">
            {data?.task}
          </span>
        </>
      ) : (
        <>
          <div className="w-[32px] h-[32px] border border-[#EEEEEE] rounded-[50%] group-hover:border-[#2D70FD26]"></div>
          <span className="text-[16px] text-[#001747] cursor-pointer group-hover:text-[#2D70FD] font-medium">
            {data?.task}
          </span>
        </>
      )}
      {isMenuOpen && <Menu id={data?.id} closeMenu={closeMenu} />}
    </div>
  );
};

export default Task;
