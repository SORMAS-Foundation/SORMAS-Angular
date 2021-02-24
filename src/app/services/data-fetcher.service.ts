import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type FetcherFn<T> = (index: number) => Observable<T[]>;

@Injectable({
  providedIn: 'root',
})
export class DataFetcherService<T> {
  size = 0;
  segments: number[][] = [];
  isLoading = false;

  private containsIndex(scrollIndex: number): boolean {
    return this.segments.some((sd) => sd[0] <= scrollIndex && scrollIndex <= sd[1]);
  }

  private computeIndex(scrollIndex: number): number {
    const firstSegment = this.segments[0];
    const segmentRange = firstSegment[1] - firstSegment[0];
    const nearestMin =
      this.segments
        .flat()
        .sort()
        .reverse()
        .find((n) => n <= scrollIndex) ?? 0;

    if (scrollIndex - nearestMin < segmentRange) {
      return nearestMin + 1;
    }

    return scrollIndex;
  }

  async init(fetcher: FetcherFn<T>): Promise<T[]> {
    this.isLoading = true;

    const initialData = await fetcher(1).toPromise();
    const dataSize = 100000; // todo get from API response
    this.size = dataSize;
    const virtualFillData = new Array(this.size - initialData.length).fill(null);
    const data = [...initialData, ...virtualFillData];
    this.segments.push([1, initialData.length]);

    this.isLoading = false;
    return data;
  }

  async fetchMoreData(index: number, currentData: T[], fetcher: FetcherFn<T>): Promise<T[]> {
    if (!this.containsIndex(index) && !this.isLoading) {
      const indexToUse = this.computeIndex(index);

      this.isLoading = true;
      // todo - also specify size
      const newData = await fetcher(indexToUse).toPromise();
      const size = newData.length;
      const newComputedData = [...currentData];
      newComputedData.splice(indexToUse - 1, size, ...newData);
      const newStoredDataBetween = [indexToUse, indexToUse + newData.length - 1];

      this.segments.push(newStoredDataBetween);
      this.isLoading = false;

      return newComputedData;
    }

    return Promise.resolve(currentData);
  }
}
