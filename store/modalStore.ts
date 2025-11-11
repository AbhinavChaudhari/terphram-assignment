import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
  onConfirm?: () => void;
  onCancel?: () => void;
  openModal: (options: {
    title?: string;
    content?: React.ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
  }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: "",
  content: null,
  onConfirm: undefined,
  onCancel: undefined,
  openModal: ({ title, content, onConfirm, onCancel }) =>
    set({
      isOpen: true,
      title,
      content,
      onConfirm,
      onCancel,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      title: "",
      content: null,
      onConfirm: undefined,
      onCancel: undefined,
    }),
}));
