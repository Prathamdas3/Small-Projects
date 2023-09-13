import { useState, useEffect } from 'react';
import todoApiContext from './todoApiContext';

const apiState = (props) => {
  const [allData, setAllData] = useState();
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const headers = {
        'Content-Type': 'application/json',
      };
      const url = 'http://localhost:5000/todo/';
      try {
        const data = await fetch(url, { method: 'GET', headers: headers });
        const newData = await data.json();
        setAllData(newData);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  // useEffect(() => {
  //   const addData = async () => {
  //     const data = {
  //       title: title,
  //       description: description,
  //       is_Complete: isComplete,
  //     };
  //     const headers = {
  //       'content-type': 'application/json',
  //     };
  //     const body = JSON.stringify(data);
  //     const url = 'http://localhost:5000/todo/';

  //     try {
  //       const setData = await fetch(url, {
  //         method: 'POST',
  //         headers: headers,
  //         body: body,
  //       });
  //       return await setData.json();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   addData();
  // }, []);

  const exportData = {
    allData,
    // setTitle,
    // setDescription,
    // setIsComplete,
  };

  return (
    <todoApiContext.Provider value={exportData}>
      {props.children}
    </todoApiContext.Provider>
  );
};

export default apiState;
