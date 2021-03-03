import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from './payloads/page';

type FetcherFn<T> = (index: number) => Observable<Page<T>>;

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

    const initialData = await fetcher(0).toPromise();
    const dataSize = initialData.totalNoElements;
    this.size = dataSize;
    const virtualFillData = new Array(this.size - initialData.elements.length).fill(null);
    const data = [...initialData.elements, ...virtualFillData];
    this.segments.push([0, initialData.elements.length - 1]);

    this.isLoading = false;
    return data;
  }

  async fetchMoreData(index: number, currentData: T[], fetcher: FetcherFn<T>): Promise<T[]> {
    if (this.isLoading || this.containsKnownSegments(index)) {
      return Promise.resolve(currentData);
    }

    const indexToUse = this.computeIndex(index);
    const segmentRange = this.getSegmentRange();

    this.isLoading = true;
    const newData = await fetcher(Math.floor(indexToUse / segmentRange)).toPromise();
    const size = newData.elements.length;
    const newComputedData = [...currentData];
    newComputedData.splice(indexToUse - 1, size, ...newData.elements);
    const newStoredDataBetween = [indexToUse, indexToUse + newData.elements.length - 1];

    this.segments.push(newStoredDataBetween);
    this.isLoading = false;

    return newComputedData;
  }
}
