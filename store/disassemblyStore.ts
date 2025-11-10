import { create } from "zustand";
import { element_ids } from "@/data/data";
import { DisassemblyState } from "@/utils/types";

export const useDisassemblyStore = create<DisassemblyState>((set, get) => ({

  // inital State 
  selectedElectrolyzer: null,
  selectedParts: [],
  checklistSelected: [],
  comments: {},

  setSelectedElectrolyzer: (id) =>
    set({ selectedElectrolyzer: id, selectedParts: [], checklistSelected: [] }),


  // element parts 
  togglePart: (id) => {
    const { selectedParts } = get();
    const exists = selectedParts.includes(id);
    set({
      selectedParts: exists
        ? selectedParts.filter((p) => p !== id)
        : [...selectedParts, id],
    });
  },

  selectAllParts: () => set({ selectedParts: element_ids.map((e) => e.id) }),
  clearParts: () => set({ selectedParts: [] }),


  // checklist 
  toggleChecklist: (item) => {
    const { checklistSelected } = get();
    const exists = checklistSelected.includes(item);
    set({
      checklistSelected: exists
        ? checklistSelected.filter((i) => i !== item)
        : [...checklistSelected, item],
    });
  },

  clearChecklist: () => set({ checklistSelected: [] }),


  // comments
  updateComment: (id, comment) =>
    set((state) => ({
      comments: { ...state.comments, [id]: comment },
    })),
}));
