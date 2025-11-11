"use client";
import { useModalStore } from "@/store/modalStore";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal() {
  const { isOpen, title, content, onConfirm, onCancel, closeModal } =
    useModalStore();

  // 👇 hydration guard
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid SSR mismatch
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={closeModal}
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      >
        <motion.div
          key="modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white rounded-2xl shadow-xl max-w-xl w-full mx-4 p-6"
        >
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg font-semibold mb-3"
            >
              {title}
            </motion.h2>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-6 text-sm text-gray-700 h-16"
          >
            {content}
          </motion.div>
          <div className="flex justify-end gap-3">
            {onCancel && (
              <button
                onClick={() => {
                  onCancel?.();
                  closeModal();
                }}
                className="px-4 py-2 rounded text-orange-600 hover:bg-gray-300 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
            )}
            {onConfirm && (
              <button
                onClick={() => {
                  onConfirm?.();
                  closeModal();
                }}
                className="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700  cursor-pointer"
              >
                Confirm
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
