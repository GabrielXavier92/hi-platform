export interface Data {
  [index: number]: Item
}

export interface Item {
  id: string;
  name: string;
  data?: Data;
  level: number;
  checked?: boolean;
  children?: Data;
}

export interface IListItem {
  data?: Data;
  id?: string;
}
