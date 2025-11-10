export interface Part {
  id: string;
  position: number;
}

export interface Electrolyzer {
  id: string;
  parts: Part[];
}