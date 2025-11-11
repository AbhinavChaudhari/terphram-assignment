export interface Part {
  id: string;
  position: number;
}

export interface Electrolyzer {
  id: string;
  parts: Part[];
}

export interface DisassemblyData {
  ids: string[];
  checklist: string[];
  comments: Record<string, string>;
  status: string;
  confirmedAt: string;
  updatedAt: string;
}


export interface DisassemblyState {
  selectedElectrolyzer: number | null;
  selectedParts: string[];
  checklistSelected: string[];
  comments: Record<string, string>;
  confirmedDisassemblies: Record<string, DisassemblyData[]>;

  // actions
  setSelectedElectrolyzer: (id: number | null) => void;
  togglePart: (id: string) => void;
  selectAllParts: () => void;
  clearParts: () => void;
  toggleChecklist: (item: string) => void;
  clearChecklist: () => void;
  updateComment: (id: string, comment: string) => void;
  confirmDisassembly:(status: string) => void;
  updateDisassembly: (electrolyzerId:string, index:number, updatedData: DisassemblyData) => void;
}
