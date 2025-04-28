export interface SliderItemData {
  id: number;
  image: string;
  title: string;
  description: string;
  save: string;
  price: string;
}

export interface SliderProps {
  items: SliderItemData[];
  title?: string;
  itemsPerPage?: number;
}
