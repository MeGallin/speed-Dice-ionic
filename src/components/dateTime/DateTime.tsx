import { useState, useEffect } from 'react';
import moment from 'moment';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(
    moment().format('DD/MM/YYYY HH:mm:ss'),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('DD/MM/YYYY HH:mm:ss'));
    }, 1000); // Update the time every second

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return <>{currentTime}</>;
};

export default DateTime;
