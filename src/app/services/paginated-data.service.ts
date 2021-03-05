import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from './payloads/page';

type PaginatedData<T> = (index: number) => Observable<Page<T>>;

@Injectable({
  providedIn: 'root',
})
export class PaginatedDataService<T> {
  // pageSize: determined based on data length from initial call
  private pageSize = 0;
  // totalSize: retrieved from api on initial call
  private totalSize = 0;
  private isLoading = false;
  private cachedPages: number[] = [];

  /**
   * @description Computes page number based on provided index from data set
   * @param index number
   * @return number: corresponding page for index
   */
  private indexToPage(index: number): number {
    return Math.floor(index / this.pageSize);
  }

  /**
   * @description Checks to see if data was already fetched for certain page
   * @param page number
   * @return true: if page was previously fetched; false: otherwise
   */
  private hasCachedPage(page: number): boolean {
    return this.cachedPages.includes(page);
  }

  /**
   * @description Computes maximum number of pages for data set
   * @return number: maxi possible page
   */
  private getMaxPage(): number {
    return this.indexToPage(this.totalSize);
  }

  /**
   * @description Determines if a new fetch request is needed for certain index from data set
   * @param index number
   * @return true: if there is no data for current or next page; false: otherwise
   */
  private shouldFetchMore(index: number): boolean {
    const page = this.indexToPage(index);

    // if we didn't already fetch this page, we should
    if (!this.hasCachedPage(page)) {
      return true;
    }

    // if we have data for this page, check to see if we need to fetch next page in advance
    if (page < this.getMaxPage() && !this.hasCachedPage(page + 1)) {
      return true;
    }

    return false;
  }

  /**
   * @description Determines the page to request data for
   * @param index number
   * @return number: page to fetch
   */
  private computePageToFetch(index: number): number {
    const page = this.indexToPage(index);

    if (!this.hasCachedPage(page)) {
      return page;
    }

    return page + 1;
  }

  async init(fetcher: PaginatedData<T>): Promise<T[]> {
    this.isLoading = true;

    const initialData = await fetcher(0).toPromise();
    this.pageSize = initialData.elements.length;
    this.totalSize = initialData.totalNoElements;
    this.cachedPages.push(0);
    const virtualFillData = new Array(this.totalSize - this.pageSize).fill(null);
    const data = [...initialData.elements, ...virtualFillData];

    this.isLoading = false;
    return data;
  }

  async fetchMoreData(index: number, currentData: T[], fetcher: PaginatedData<T>): Promise<T[]> {
    if (this.isLoading || !this.shouldFetchMore(index)) {
      return Promise.resolve(currentData);
    }

    this.isLoading = true;

    const nextPage = this.computePageToFetch(index);
    const data = await fetcher(nextPage).toPromise();
    const newData = [...currentData];
    newData.splice(nextPage * this.pageSize, data.elements.length, ...data.elements);
    this.cachedPages.push(nextPage);

    this.isLoading = false;
    return newData;
  }
}
