export interface ChipData {
  // platform:    string;
  suggestions: Chip[];
  text?:        string;
  type?: string;
}

export interface Chip {
  imageUrl?: string;
  value: string;
}