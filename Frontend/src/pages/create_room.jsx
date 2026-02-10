import React, { useState } from "react";

const CreateRoom = () => {
  const [groupName, setGroupName] = useState("");
  const [time, setTime] = useState(5);
  const [roomId, setRoomId] = useState(null);

  // Function to determine background class
  const getBackgroundClass = () => {
    if (time <= 30) return "bg-blue-900";
    if (time <= 60) return "bg-purple-900";
    return "bg-green-900";
  };

  const handleCreateRoom = async () => {
    // Fake backend response
    const fakeId = "ABC123";
    setRoomId(fakeId);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center
        bg-blue-900 bg-purple-900 bg-green-900 ${getBackgroundClass()}`}
    >
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col gap-6 w-80">
        {/* Group Name */}
        <label className="flex flex-col text-white font-medium">
          Enter Group Name:
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="My Secret Group"
            className="mt-2 px-3 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-indigo-500"
          />
        </label>

        {/* Time Selection */}
        <label className="flex flex-col text-white font-medium">
          Select Duration: {time <= 60 ? `${time} min` : `${Math.floor(time / 60)} hr ${time % 60} min`}
          <input
            type="range"
            min={5}
            max={120}
            step={5}
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="mt-2 w-full"
          />
        </label>

        {/* Create Room Button */}
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          onClick={handleCreateRoom}
        >
          Create Room
        </button>

        {/* Room ID display */}
        {roomId && (
          <div className="mt-4 p-3 bg-gray-700 text-white text-center rounded-lg">
            Room Created! ID: <span className="font-bold">{roomId}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateRoom;
