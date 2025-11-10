"use client";
import SideBar from "./sidebar";
import PartList from "./partList";
import PartForm from "./partForm";
import { useDisassemblyStore } from "@/store/disassemblyStore";

export const Disassembly = () => {
  const selectedElectrolyzer = useDisassemblyStore((state) => state.selectedElectrolyzer)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
      <SideBar />

      <div className="w-full h-full">
        {selectedElectrolyzer ? (
          <div className="h-full">
            <h2 className="px-7 py-2  bg-gray-200">
              Electrolyzer ID: {selectedElectrolyzer}
            </h2>

            <div className="flex w-full h-full">
              <PartList />
              <PartForm />
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
