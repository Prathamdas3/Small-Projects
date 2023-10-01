import apiContext from './apiContext';
import { useState, useEffect } from 'react';

const apiState = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getCardData = async () => {
      const url = 'http://localhost:5000/';
      const header = {
        'Content-Type': 'application/json',
      };
      const response = await fetch(url, {
        method: 'GET',
        headers: header,
      });

      const data = await response.json();
      setData(data);
    };

    getCardData();
  }, []);
  return (
    <apiContext.Provider value={data}>{props.children}</apiContext.Provider>
  );
};

export default apiState;
