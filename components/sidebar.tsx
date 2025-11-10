"use client";

import { electrolyzer_ids } from "@/data/data";
import { useDisassemblyStore } from "@/store/disassemblyStore";
import { useState } from "react";

const SideBar = () => {
  const [search, setSearch] = useState("");
  const { selectedElectrolyzer, setSelectedElectrolyzer, clearChecklist, clearParts } =
    useDisassemblyStore();

  const filteredIds = electrolyzer_ids.filter((id) =>
    id.toString().includes(search)
  );

  return (
    <div className="w-80  p-8 h-full">
      <h2 className="font-semibold text-gray-700 mb-2">
        Available Electrolyzers ID
      </h2>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          className="w-full p-2 rounded border text-sm pl-10"
          placeholder="Search Electrolyzer ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mt-4 space-y-2">
        {filteredIds.map((id) => (
          <button
            key={id}
            onClick={() => {
              setSelectedElectrolyzer(id);
              clearChecklist();
              clearParts()
              //   setSelectedElements([]);
            }}
            className={`w-40 py-2 rounded border text-center transition cursor-pointer ${
              selectedElectrolyzer === id
                ? "bg-orange-600 border-dotted border-2 border-white text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
