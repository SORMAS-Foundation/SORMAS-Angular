import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DataFetcherService } from './data-fetcher.service';

type TestDto = {
  id: number;
  name: string;
};

const allData: TestDto[] = new Array<TestDto>(100000)
  .fill({
    id: 0,
    name: '0',
  })
  .map((_, i) => ({
    id: i,
    name: `name ${i}`,
  }));

const mockFetcher = (index: number) => of(allData.slice(index - 1, index - 1 + 20));

describe('DataFetcherService', () => {
  const getNullAndNonNull = (data: TestDto[]) => {
    const nonNullData = data.filter((x) => x !== null);
    const nullData = data.filter((x) => x === null);

    return {
      nonNullData,
      nullData,
    };
  };

  let service: DataFetcherService<TestDto>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can initialize data', async () => {
    const data = await service.init(mockFetcher);

    expect(data.length).toBe(100000);
  });

  it('appends virtual data to data', async () => {
    const data = await service.init(mockFetcher);

    const { nonNullData, nullData } = getNullAndNonNull(data);

    expect(nonNullData.length).toBe(20);
    expect(nullData.length).toBe(100000 - 20);
  });

  it('correctly computes initial segments', async () => {
    await service.init(mockFetcher);

    expect(service.segments).toEqual([[1, 20]]);
  });

  it('can fetch more data', async () => {
    const initialData = await service.init(mockFetcher);
    const moreData = await service.fetchMoreData(21, initialData, mockFetcher);

    const { nonNullData, nullData } = getNullAndNonNull(moreData);

    expect(nonNullData.length).toBe(40);
    expect(nullData.length).toBe(100000 - 40);
  });

  it('can fetch more data multiple times correctly', async () => {
    const initialData = await service.init(mockFetcher);
    const data = await service.fetchMoreData(21, initialData, mockFetcher);
    const finalData = await service.fetchMoreData(41, data, mockFetcher);

    const { nonNullData, nullData } = getNullAndNonNull(finalData);

    expect(nonNullData.length).toBe(60);
    expect(nullData.length).toBe(100000 - 60);

    expect(service.segments).toEqual([
      [1, 20],
      [21, 40],
      [41, 60],
    ]);
  });

  it('can fetch data in-between segments', async () => {
    const initialData = await service.init(mockFetcher);
    const moreData = await service.fetchMoreData(41, initialData, mockFetcher);
    await service.fetchMoreData(30, moreData, mockFetcher);

    expect(service.segments).toEqual([
      [1, 20],
      [41, 60],
      [21, 40],
    ]);
  });

  it('can fetch data ahead of time', async () => {
    // if we have segments [[1,20]] & our index is 10
    // then fetch data for 21 - 40 because probably the user will go there
    const initialData = await service.init(mockFetcher);
    await service.fetchMoreData(10, initialData, mockFetcher);

    expect(service.segments).toEqual([
      [1, 20],
      [21, 40],
    ]);
  });
});
