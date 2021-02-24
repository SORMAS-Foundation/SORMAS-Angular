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

const mockFetcher = (index: number) => of(allData.slice(index, 20));

describe('DataFetcherService', () => {
  let service: DataFetcherService<TestDto>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can initialize data', async () => {
    const data = await service.init(mockFetcher as any);

    expect(data.length).toBe(100000);
  });

  it('appends virtual data to data', async () => {
    const data = await service.init(mockFetcher as any);

    const nonNullData = data.filter((x) => !!x);
    const nullData = data.filter((x) => x === null);

    expect(nonNullData.length).toBe(20);
    expect(nullData.length).toBe(100000 - 20);
  });

  it('correctly computes initial storedDataBetweenIndexes', async () => {
    await service.init(mockFetcher as any);

    expect(service.storedDataBetweenIndexes).toEqual([[1, 20]]);
  });

  it('can fetch more data', async () => {
    const initialData = await service.init(mockFetcher as any);
    const moreData = await service.fetchMoreData(21, initialData, mockFetcher as any);

    const nonNullData = moreData.filter((x) => x !== null);
    const nullData = moreData.filter((x) => x === null);

    expect(nonNullData.length).toBe(40);
    expect(nullData.length).toBe(100000 - 40);
  });

  it('can fetch more data multiple times correctly', async () => {
    const initialData = await service.init(mockFetcher as any);
    const data = await service.fetchMoreData(21, initialData, mockFetcher as any);
    const finalData = await service.fetchMoreData(41, data, mockFetcher as any);

    const nonNullData = finalData.filter((x) => x !== null);
    const nullData = finalData.filter((x) => x === null);

    console.log(data, finalData, service);

    expect(nonNullData.length).toBe(60);
    expect(nullData.length).toBe(100000 - 60);
  });
});
