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

  private getSegmentRange(): number {
    const firstSegment = this.segments[0];

    return firstSegment ? firstSegment[1] - firstSegment[0] + 1 : 0;
  }

  private findSegment(scrollIndex: number): number[] | undefined {
    return this.segments.find((sd) => sd[0] <= scrollIndex && scrollIndex <= sd[1]);
  }

  // true if index is somewhere between a segment and nearest segments are also known
  private containsKnownSegments(scrollIndex: number): boolean {
    const segment = this.findSegment(scrollIndex);

    if (segment) {
      const segmentRange = this.getSegmentRange();
      const nextSegment = this.findSegment(scrollIndex + segmentRange);
      const prevSegment =
        scrollIndex - segmentRange > 0 ? this.findSegment(scrollIndex - segmentRange) : true;

      return !!nextSegment && !!prevSegment;
    }

    return false;
  }

  // if the index already exists in a segment it will return the next index for the next segment to fetch
  // otherwise will fetch at the start of the segment where the index is
  private computeIndex(scrollIndex: number): number {
    const segment = this.findSegment(scrollIndex);
    const segmentRange = this.getSegmentRange();

    if (segment) {
      const nextSegment = this.findSegment(scrollIndex + segmentRange);

      if (!nextSegment) {
        return segment[1] + 1;
      }
    }

    const allSegmentStarts = new Array(Math.round(this.size / segmentRange))
      .fill(null)
      .map((_, i) => (i + 1) * segmentRange + 1);

    const nearestMin = allSegmentStarts.reverse().find((n) => n <= scrollIndex) ?? 0;
    return nearestMin;
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
    if (!this.containsKnownSegments(index) && !this.isLoading) {
      const indexToUse = this.computeIndex(index);

      this.isLoading = true;
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
