import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type FetcherFn<T> = () => Observable<T[]>;

@Injectable({
  providedIn: 'root',
})
export class DataFetcherService<T> {
  size = 0;
  storedDataBetweenIndexes: number[][] = [];
  isLoading = false;

  private containsIndex(scrolledIndex: number): boolean {
    const containsIndex = this.storedDataBetweenIndexes.some(
      (sd) => sd[0] <= scrolledIndex && scrolledIndex <= sd[1]
    );

    // console.log('containsIndex', scrolledIndex, this.storedDataBetweenIndexes, containsIndex);

    return containsIndex;
  }

  async init(fetcher: FetcherFn<T>): Promise<T[]> {
    this.isLoading = true;

    const initialData = await fetcher().toPromise();
    const dataSize = 100000; // todo get from API response
    this.size = dataSize;
    const virtualFillData = new Array(this.size - initialData.length).fill(null);
    const data = [...initialData, ...virtualFillData];
    this.storedDataBetweenIndexes.push([0, initialData.length]);

    this.isLoading = false;
    return data;
  }

  async fetchMoreData(index: number, currentData: T[], fetcher: FetcherFn<T>): Promise<T[]> {
    if (!this.containsIndex(index) && !this.isLoading) {
      // TODO - try catch with retry

      this.isLoading = true;
      // TODO - pass the index to get the data to the API to get it from the specified index - and calculate what size you need
      const newData = await fetcher().toPromise();
      const size = newData.length;
      const newResolvedData = [...currentData];
      newResolvedData.splice(index, size, ...newData);
      // newResolvedData.splice(index - 1, size); // newResolvedData.splice(index, size, ...newData);
      // newResolvedData.splice(index - 1, 0, ...newData);
      const newStoredDataBetween = [index, index + newData.length];

      this.storedDataBetweenIndexes.push(newStoredDataBetween);
      this.isLoading = false;

      return newResolvedData;
    }

    return Promise.resolve(currentData);
  }
}
