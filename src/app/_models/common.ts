import { Resource } from './resource';

// pagination
export interface PaginationResponse {
  elements: Resource[];
  hasNext: boolean;
  pageNumber: number;
  size: number;
  totalNoElements: number;
}

// sorting
export interface Sorting {
  field: string;
  ascending: boolean;
}

// filter
export interface Filter {
  field: string;
  value?: string;
  operation?: string;
}

// table
export interface TableColumn {
  name: string;
  dataKey: string;
  advancedDisplay?: string;
  advancedDisplayParams?: string[];
  linkPattern?: string;
  linkParams?: string[];
  isSortable?: boolean;
  iconify?: boolean;
  stylify?: boolean;
}

// scrolling
export interface Offset {
  top: number;
  left: number;
}

// nav menu
export type NavItemType = 'LINK' | 'ACTION' | 'MENU';

export interface NavItem {
  role: NavItemType;
  name: string;
  action: string;
  children?: NavItem[];
}
