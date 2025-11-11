import { create } from "zustand";
import { element_ids } from "@/data/data";
import { DisassemblyState } from "@/utils/types";

export const useDisassemblyStore = create<DisassemblyState>((set, get) => ({
  selectedElectrolyzer: null,
  selectedParts: [],
  checklistSelected: [],
  comments: {},
  confirmedDisassemblies: {}, // { [electrolyzerId]: [ { ids, checklist, comments, status, confirmedAt } ] }

  setSelectedElectrolyzer: (id) =>
    set({ selectedElectrolyzer: id, selectedParts: [], checklistSelected: [], comments: {} }),

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

  updateComment: (id, comment) =>
    set((state) => ({
      comments: { ...state.comments, [id]: comment },
    })),

  // ✅ Confirm a new disassembly (can be multiple per electrolyzer)
  confirmDisassembly: (status) => {
    const {
      selectedElectrolyzer,
      selectedParts,
      checklistSelected,
      comments,
      confirmedDisassemblies,
    } = get();

    if (!selectedElectrolyzer) return;

    const newEntry = {
      ids: selectedParts,
      checklist: checklistSelected,
      comments,
      status,
      confirmedAt: new Date().toISOString(),
    };

    const existing = confirmedDisassemblies[selectedElectrolyzer] || [];

    set({
      confirmedDisassemblies: {
        ...confirmedDisassemblies,
        [selectedElectrolyzer]: [...existing, newEntry],
      },
      selectedParts: [],
      checklistSelected: [],
      comments: {},
    });
  },

  // ✅ Update an existing disassembly entry
  updateDisassembly: (electrolyzerId, index, updatedData) => {
    const { confirmedDisassemblies } = get();
    const entries = [...(confirmedDisassemblies[electrolyzerId] || [])];
    entries[index] = {
      ...entries[index],
      ...updatedData,
      updatedAt: new Date().toISOString(),
    };

    set({
      confirmedDisassemblies: {
        ...confirmedDisassemblies,
        [electrolyzerId]: entries,
      },
    });
  },
}));
