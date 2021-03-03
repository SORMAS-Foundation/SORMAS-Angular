export interface Page<T> {
  elements: T[];
  pageNumber: number;
  size: number;
  totalNoElements: number;
  hasNext: boolean;
}
