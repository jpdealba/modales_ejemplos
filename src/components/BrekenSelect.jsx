import React, { useEffect, useRef, useState } from "react";

const BrekenSelect = ({ label, options, handleChange, classes, selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const clickListener = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", clickListener);
    }

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [isOpen]);

  const handleClick = (option, label) => {
    setIsOpen(!isOpen);
    handleChange(option);
  };

  return (
    <div
      className={`relative inline-block text-left w-full ${classes}`}
      ref={dropdownRef}
    >
      <div>
        <span className="relative">
          {selected && (
            <span
              className={`text-[#DF854F] text-xs absolute bottom-[140%]  left-4`}
            >
              {label}
            </span>
          )}
          <button
            type="button"
            className={`inline-flex shadow-lg ${
              selected ? "text-gray-700" : "text-gray-400"
            } justify-between w-full rounded-xl shadow-[#0000005c] px-4 py-4 bg-white leading-5 font-medium focus:outline-none  active:bg-gray-50 transition ease-in-out duration-150`}
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected ? selected.label : label}
            <SVG isOpen={isOpen} />
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-1 w-full rounded-md shadow-lg">
          <div className="rounded-md bg-white  w-full">
            <div
              className="py-1 overflow-auto max-h-36"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="#"
                className={`block px-4 py-2 text-sm leading-5   hover:bg-gray-100 focus:outline-none focus:bg-gray-100 `}
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(null);
                }}
              >
                Ninguno
              </a>
              {options.map((option) => (
                <a
                  key={option.value}
                  href="#"
                  className={`block px-4 py-2 text-sm leading-5   hover:bg-gray-100 focus:outline-none focus:bg-gray-100 `}
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(option);
                  }}
                >
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrekenSelect;

const SVG = ({ isOpen }) => {
  return (
    <svg
      className={`${isOpen && "rotate-180"} transition-all duration-500`}
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0741 15.2023L18.0924 3.48581C18.2371 3.23522 18.3136 2.95111 18.3144 2.66175C18.3153 2.37238 18.2403 2.08785 18.097 1.83646C17.9537 1.58506 17.7471 1.37557 17.4977 1.22882C17.2483 1.08207 16.9648 1.00318 16.6755 1L2.63891 1C2.34957 1.00318 2.06609 1.08207 1.8167 1.22882C1.5673 1.37557 1.36068 1.58506 1.21738 1.83646C1.07409 2.08785 0.999116 2.37238 0.999927 2.66175C1.00074 2.95111 1.0773 3.23522 1.222 3.48581L8.24027 15.2023C8.38799 15.4458 8.59598 15.6471 8.84416 15.7869C9.09235 15.9266 9.37237 16 9.65719 16C9.94201 16 10.222 15.9266 10.4702 15.7869C10.7184 15.6471 10.9264 15.4458 11.0741 15.2023Z"
        stroke="#DF854F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
