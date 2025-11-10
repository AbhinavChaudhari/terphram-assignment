export interface Part {
  id: string;
  position: number;
}

export interface Electrolyzer {
  id: string;
  parts: Part[];
}

export interface DisassemblyState {
  selectedElectrolyzer: number | null;
  selectedParts: string[];
  checklistSelected: string[];
  comments: Record<string, string>;

  // actions
  setSelectedElectrolyzer: (id: number | null) => void;
  togglePart: (id: string) => void;
  selectAllParts: () => void;
  clearParts: () => void;
  toggleChecklist: (item: string) => void;
  clearChecklist: () => void;
  updateComment: (id: string, comment: string) => void;
}