import request from '@/utils/request';

export async function fetchHomeData() {
  return request('/api/saikulIndexData');
}

