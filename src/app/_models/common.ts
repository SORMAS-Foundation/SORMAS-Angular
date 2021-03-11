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
