"use client";
import SideBar from "./sidebar";
import PartList from "./partList";
import PartForm from "./partForm";
import { useDisassemblyStore } from "@/store/disassemblyStore";
import { motion, AnimatePresence } from "framer-motion";

export const Disassembly = () => {
  const selectedElectrolyzer = useDisassemblyStore(
    (state) => state.selectedElectrolyzer
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-gray-800">
      <SideBar />

      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          {selectedElectrolyzer ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full"
            >
              <h2 className="px-7 py-2  bg-gray-200">
                Electrolyzer ID: {selectedElectrolyzer}
              </h2>

              <div className="flex w-full h-full">
                <PartList />
                <PartForm />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="h-full flex justify-center items-center"
            >
              <p className="bg-[#B0B4D2] px-10 py-1">
                Select an Electrolyzer to begin
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
