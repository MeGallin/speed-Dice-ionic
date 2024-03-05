import { useEffect, useState } from 'react';
import moment from 'moment';

const useFromNow = () => {
  const [startTime] = useState(moment()); // Capture the start time when the hook is first used
  const [, setCurrentTime] = useState(moment()); // Current time state to trigger re-renders

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment()); // Update current time every second
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return startTime.fromNow(); // Use startTime to calculate the "from now" string
};

export default useFromNow;