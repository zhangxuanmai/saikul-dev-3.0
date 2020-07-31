import React, { useEffect, useState } from 'react';
import NavBar from '@/components/Navbar';
import Landing from './components/Landing';
import styles from './index.less';
import { fetchHomeData } from '@/services/home';

interface DataType {
  currentTime: string;
  lastMonthTradingVolume: number;
  totalTaxAmount: number;
  totalTaxableOrderAmount: number;
  totalTaxableOrderCount: number;
  totalTradingAmount: number;
  totalTradingCount: number;
  totalTradingVolume: number;
}

interface Props { }

const HomePage: React.FC<Props> = (props) => {
  const [landingData, setLandingData] = useState<DataType[]>([]);

  useEffect(() => {
    fetchHomeData().then(res => setLandingData(res.saikulIndexDataView))
  }, [])

  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Landing data={landingData} />
    </div>
  )
}

export default HomePage

