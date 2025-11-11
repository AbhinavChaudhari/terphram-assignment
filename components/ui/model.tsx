"use client";
import { useModalStore } from "@/store/modalStore";
import { useEffect, useState } from "react";

export default function Modal() {
  const { isOpen, title, content, onConfirm, onCancel, closeModal } =
    useModalStore();


  // 👇 hydration guard
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   if (!mounted) return;

  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") closeModal();
  //   };
  //   window.addEventListener("keydown", handleKeyDown);
  //   return () => window.removeEventListener("keydown", handleKeyDown);
  // }, [closeModal]);


  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid SSR mismatch
  if (!isOpen) return null;

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl max-w-xl w-full mx-4 p-6"
      >
        {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
        <div className="mb-6 text-sm text-gray-700 h-16">{content}</div>
        <div className="flex justify-end gap-3">
          {onCancel && (
            <button
              onClick={() => {
                onCancel?.();
                closeModal();
              }}
              className="px-4 py-2 rounded text-orange-600 hover:bg-gray-300 hover:text-white"
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
              className="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
