import { useState } from "react";
import DefaultGIF from "../components/DefaultGIF";
import { Link } from "react-router-dom";

const Proposal = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const handleNoButtonClick = () => {
    // Update the position of the "No" button
    setNoButtonPosition({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    });
  };

  const handleYesButtonClick = () => {
    console.log("Yay! You're going out with me!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-8 bg-gray-200 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold">Will you go out with me?</h1>
        <DefaultGIF />
      </div>
      <div className="mt-4 space-x-4">
        <Link to="/Will-You/success">
          <button
            to="/yaaay"
            className="px-4 py-2 text-white bg-green-500 rounded-md"
            onClick={handleYesButtonClick}
          >
            Yes
          </button>
        </Link>
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md"
          onMouseOver={handleNoButtonClick}
          style={{
            position: "absolute",
            top: noButtonPosition.top,
            left: noButtonPosition.left,
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Proposal;
