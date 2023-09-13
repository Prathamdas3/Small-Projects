import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        {hour}:{minutes}:{seconds}
      </div>
    </>
  );
};

export default Clock;
