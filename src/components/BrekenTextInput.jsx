import React, { useRef, useState } from "react";

const BrekenTextInput = ({ placeholder, handleChange, classes, value }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClick = () => {
    console.log("Lupa clicada");
    // Agrega la lógica al hacer clic en la lupa aquí
  };

  return (
    <div
      className={`relative inline-block text-left w-full ${classes}`}
      ref={inputRef}
    >
      <div>
        <span className="relative">
          {value && (
            <span
              className={`text-[#DF854F] text-xs absolute bottom-[140%]  left-4 z-50`}
            >
              {placeholder}
            </span>
          )}
          <div className="relative inline-flex items-center shadow-lg justify-between w-full rounded-xl shadow-[#0000005c] px-4 py-4 bg-white leading-5 font-medium focus:outline-none active:bg-gray-50 transition ease-in-out duration-150">
            <input
              type="text"
              value={value}
              onFocus={handleFocus}
              placeholder={placeholder}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`bg-transparent outline-none flex-grow pr-6 ${"text-gray-700"} overflow-hidden`}
            />

            <button onClick={handleClick} className="absolute right-4">
              <SearchSVG />
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default BrekenTextInput;

const SearchSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#DF854F"
      className="relative "
      width={20}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};
