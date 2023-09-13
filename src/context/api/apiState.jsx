import apiContext from './apiContext';

const apiState = (props) => {
  return <apiContext.Provider>{props.children}</apiContext.Provider>;
};

export default apiState;
