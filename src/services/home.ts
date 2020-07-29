import request from '@/utils/request';
import moment from 'moment';

export async function fetchIndexData() {
  return request('/api/saikulIndexData');
}

export async function fetchMonthData() {
  return request('/api/saikulIndexData/monthlyTradingCurveData');
}

export async function fetchTradingVolumeData(param: string | undefined) {
  switch (param) {
    case 'month':
      return request('/api/saikulIndexData/dailyTradingCurveData', {
        params: {
          startTime: moment()
            .startOf('month')
            .format(),
        },
      });
    case 'year':
      return request('/api/saikulIndexData/monthlyTradingCurveData', {
        params: {
          startTime: moment()
            .startOf('year')
            .format(),
        },
      });

    default:
      return request('/api/saikulIndexData/dailyTradingCurveData');
  }
}

export async function fetchTaxSellerRankingData() {
  return request('/api/saikulIndexData/taxSellerRanking');
}
