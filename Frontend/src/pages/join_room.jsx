import React from "react";

const JoinRoom = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col gap-4 w-80">
        <label className="flex flex-col text-white font-medium">
          Enter Group ID:
          <input
            type="text"
            className="mt-2 px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-indigo-500"
          />
        </label>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
          Join Room
        </button>
      </div>
    </div>
  );
};

export default JoinRoom;
