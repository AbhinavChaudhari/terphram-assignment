import { useState } from "react";
import Checklist from "./checkList";
import CommentSection from "./commentSection";
import ActionButtons from "./actionButtons";

const PartForm = ({
  selectedParts,
  checklistSelected,
  setChecklistSelected,
}: {
  selectedParts: string[];
  checklistSelected: string[];
  setChecklistSelected: (ids: string[]) => void;
}) => {
  return selectedParts.length <= 0 ? (
    <div className="h-full w-full flex justify-center items-center">
      <p className="bg-[#B0B4D2] px-10 py-1">
        Select an Electrolyzer ID and then Select one or more element part ID to
        start disassembly
      </p>
    </div>
  ) : (
    <div className="bg-white rounded-lg shadow px-6 mb-6 py-10">
      <div className="flex flex-col mb-8">
        <label htmlFor="comments" className="text-gray-400">
          Cut Out Comments
        </label>
        <textarea
          placeholder="Cut Out Comments here"
          className="outline-0 text-xs p-2 rounded bg-gray-100 mt-1"
        ></textarea>
      </div>
      <Checklist
        checklistSelected={checklistSelected}
        setChecklistSelected={setChecklistSelected}
      />

      <CommentSection selectedParts={selectedParts} />
      <ActionButtons />
    </div>
  );
};

export default PartForm;
