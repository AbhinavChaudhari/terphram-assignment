"use client";
import { useState } from "react";
import SideBar from "./sidebar";
import PartList from "./partList";
import { element_ids } from "@/data/data";
import PartForm from "./partForm";

export const Disassembly = () => {
  const [selectedElectrolyzer, setSelectedElectrolyzer] = useState<
    number | null
  >(null);
  const [selectedParts, setSelectedParts] = useState<string[]>([]);
  const [checklistSelected, setChecklistSelected] = useState<string[]>([]);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
      <SideBar
        selectedElectrolyzer={selectedElectrolyzer}
        setSelectedElectrolyzer={setSelectedElectrolyzer}
      />

      <div className="w-full h-full">
        {selectedElectrolyzer ? (
          <div className="h-full">
            <h2 className="px-7 py-2  bg-gray-200">
              Electrolyzer ID: {selectedElectrolyzer}
            </h2>

            <div className="flex w-full h-full">
              <PartList
                parts={element_ids}
                selectedParts={selectedParts}
                onSelect={setSelectedParts}
                checklistSelected={checklistSelected}
              />
              <PartForm
                selectedParts={selectedParts}
                checklistSelected={checklistSelected}
                setChecklistSelected={setChecklistSelected}
              />
            </div>
          </div>
        ) : (
          <div className="h-full flex justify-center items-center">
            <p className="bg-[#B0B4D2] px-10 py-1">
              Select an Electrolyzer to begin
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
