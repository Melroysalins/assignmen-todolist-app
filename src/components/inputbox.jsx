import React from "react";

const InputBox = ({ inputValue, onchange, onclick }) => {
  return (
    <div className="mt-[40px] flex align-middle border border-[#EEEEEE] rounded-[8px] p-2">
      <input
        type="text"
        placeholder="Add new list item"
        className="outline-none w-[90%] p-4 text-[#B1BACB]"
        value={inputValue}
        onChange={onchange}
      />
      <button
        className="bg-[#2D70FD] border border-[#2D70FD] max-md:pr-[21px] max-md:pl-[21px]
      pt-[12px] pr-[28px] pb-[12px] pl-[28px]  max-sm:text-[15px] max-sm:pl-[15px] max-sm:pr-[15px] max-sm:pb-[8px] text-center align-middle cursor-pointer text-white font-medium rounded-[4px] text-[18px] hover:opacity-70"
        onClick={onclick}
      >
        Add
      </button>
    </div>
  );
};

export default InputBox;
