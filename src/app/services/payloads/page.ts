import { Observable } from 'rxjs';

export interface SortProperties<T> {
  property?: keyof T;
  order?: 'asc' | 'desc';
}

export interface PageRequest<T> {
  page: number;
  size: number;
  sortProperties: SortProperties<T>;
  caseCriteria?: object;
}

export interface Page<T> {
  elements: T[];
  pageNumber: number;
  size: number;
  totalNoElements: number;
  hasNext: boolean;
}

export type PaginatedEndpoint<T> = (req: PageRequest<T>) => Observable<Page<T>>;
