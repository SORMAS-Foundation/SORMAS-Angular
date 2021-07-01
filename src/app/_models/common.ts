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
export interface TableDataFormat {
  type: string;
  pattern?: string;
  params?: string[];
  match?: { [key: string]: number[] };
  truncate?: number;
}

export interface TableColumn {
  name: string;
  dataKey: string;
  isSortable?: boolean;
  iconify?: boolean;
  align?: string;
  className?: string;
  format?: TableDataFormat;
}

// scrolling
export interface Offset {
  top: number;
  left: number;
}

// nav menu
export type NavItemType = 'LINK' | 'ACTION' | 'MENU';

export const NavItemRole = {
  LINK: 'LINK' as NavItemType,
  ACTION: 'ACTION' as NavItemType,
  MENU: 'MENU' as NavItemType,
};

export interface NavItem {
  role: NavItemType;
  name: string;
  action: string;
  className?: string;
  children?: NavItem[];
  component?: any;
}
