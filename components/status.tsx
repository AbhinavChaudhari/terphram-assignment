import React from "react";

const Status = ({partStatusMap, id}: {partStatusMap: Record<string, { status: string; checklistCount: number }>, id: string}) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs ${
        partStatusMap[id]?.status === "Ready for Repair"
          ? "bg-red-500 text-white"
          : "bg-green-700 text-white"
      }`}
    >
      {partStatusMap[id]?.status}
    </span>
  );
};

export default Status;
