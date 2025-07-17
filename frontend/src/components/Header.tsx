import React from "react";

interface Props {
  location: string;
  setLocation: (value: string) => void;
}

const Header: React.FC<Props> = ({ location, setLocation }) => {
  return (
    <header className="w-full bg-white border-b border-gray-300 shadow-sm p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-gray-800">Mployee Jobs</h1>

      <div className="flex-1 flex justify-center">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search by location"
          className="w-full max-w-md px-4 py-2 border border-black text-black placeholder-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="w-32"></div>
    </header>
  );
};

export default Header;
