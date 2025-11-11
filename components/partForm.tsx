import { useState } from "react";
import Checklist from "./checkList";
import CommentSection from "./commentSection";
import ActionButtons from "./actionButtons";
import { useDisassemblyStore } from "@/store/disassemblyStore";

const PartForm = () => {
  const {selectedParts} = useDisassemblyStore();

  if (selectedParts.length <= 0) {
    return (
      <div className="w-full flex justify-center items-center h-full">
        <p className="bg-[#B0B4D2] px-10 py-1 text-sm text-center">
          Select an Electrolyzer ID and then select one or more element part IDs
          to start disassembly
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pb-10 ">
        <div className="flex flex-col mt-5">
          <label htmlFor="comments" className="text-gray-400 text-sm">
            Cut Out Comments
          </label>
          <textarea
            placeholder="Cut Out Comments here"
            className="outline-0 text-xs p-2 rounded bg-gray-100 mt-1 mb-8 h-20"
          ></textarea>

          <Checklist />
          <CommentSection />
        </div>
      </div>

      {/* Fixed bottom buttons */}
      <div className=" px-6 pb-3 bg-white sticky bottom-0">
        <ActionButtons />
      </div>
    </div>
  );
};

export default PartForm;
