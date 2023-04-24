import { useState } from "react";
import { Transition } from "@headlessui/react";

function VideoCollectionNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <fieldset className="border rounded-full border-black">
        <legend className="mx-4">Categories</legend>
        <div className="relative  text-left px-2 flex justify-center">
          <button
            type="button"
            className="inline-flex justify-center text-sm font-medium text-gray-700 bg-white rounded-md  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption || "All"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.707a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute right-0 w-56 mt-6 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg">
              <ul className="py-1">
                {options.map((option, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </Transition>
        </div>
      </fieldset>
    </div>
  );
}

export default VideoCollectionNavbar;
