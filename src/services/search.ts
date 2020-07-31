import request from '@/utils/request';

export interface SearchParamsType {
  secondaryMerchandiseId: (number | string)[];
  areaDisId: (number | string)[];
  taxRegionId: (number | string)[];
  searchText: string;
  page: number;
  size: number;
  sort: string;
}

export async function fetchGoodsData(params: SearchParamsType) {
  return request('/api/merchandise/search', { params });
}

export async function fetchSortData() {
  return request('/api/merchandise/search/parameter');
}


