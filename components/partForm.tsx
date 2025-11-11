"use client";
import { motion, AnimatePresence } from "framer-motion";
import Checklist from "./checkList";
import CommentSection from "./commentSection";
import ActionButtons from "./actionButtons";
import { useDisassemblyStore } from "@/store/disassemblyStore";

const PartForm = () => {
  const { selectedParts } = useDisassemblyStore();

  return (
    <div className="flex flex-col h-full bg-white w-full">
      <AnimatePresence mode="wait">
        {/* Empty state (fade in/out) */}
        {selectedParts.length <= 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full flex justify-center items-center h-full"
          >
            <p className="bg-[#B0B4D2] px-10 py-1 text-sm text-center rounded">
              Select an Electrolyzer ID and then select one or more element part IDs
              to start disassembly
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col h-full"
          >
            {/* Scrollable content */}
            <motion.div
              className="flex-1 overflow-y-auto px-6 pb-10"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col mt-5"
              >
                <label htmlFor="comments" className="text-gray-400 text-sm">
                  Cut Out Comments
                </label>
                <motion.textarea
                  placeholder="Cut Out Comments here"
                  className="outline-0 text-xs p-2 rounded bg-gray-100 mt-1 mb-8 h-20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.textarea>
              </motion.div>

              {/* Checklist + Comments section with stagger */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Checklist />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <CommentSection />
              </motion.div>
            </motion.div>

            {/* Fixed bottom buttons */}
            <motion.div
              className="px-6 pb-3 bg-white sticky bottom-0"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <ActionButtons />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PartForm;
