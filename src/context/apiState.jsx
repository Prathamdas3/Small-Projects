import { useState, useEffect } from 'react';
import apiContext from './apiContext';

const apiState = (props) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:5000';
      const data = await fetch(url);
      const newData = await data.json();
      setTitle(newData.title);
      setDescription(newData.description);
    };
  });
  return <apiContext.Provider>{props.children}</apiContext.Provider>;
};

export default apiState;
