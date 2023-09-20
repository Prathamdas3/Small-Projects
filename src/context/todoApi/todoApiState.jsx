import { useState } from 'react';
import todoApiContext from './todoApiContext';

const apiState = (props) => {
  const [allData, setAllData] = useState();

  //getting all the todos
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

  //adding new todos
  const addData = async (title, description, isComplete, tags) => {
    const data = {
      title: title,
      description: description,
      tags: tags,
      is_Complete: isComplete,
    };
    const headers = {
      'content-type': 'application/json',
    };
    const body = JSON.stringify(data);
    const url = 'http://localhost:5000/todo/';

    try {
      const setData = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
      });
      const jsonData = await setData.json();

      setData();
    } catch (error) {
      console.log(error);
    }
  };

  const exportData = {
    allData,
    addData,
    getData,
  };

  return (
    <todoApiContext.Provider value={exportData}>
      {props.children}
    </todoApiContext.Provider>
  );
};

export default apiState;
