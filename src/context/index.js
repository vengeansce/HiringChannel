import React, {useState, useEffect} from 'react';
import {query, getEngineers} from './engineer';

const RootContext = React.createContext();
export function Provider(props) {
  let [queryParam, setQueryParam] = useState(query);
  let [engineers, setEngineers] = useState([]);

  const fetchEngineers = () =>
    getEngineers(queryParam, data => setEngineers(data));

  const dispatch = {
    fetchEngineers,
    setQueryParam: payload => setQueryParam({...queryParam, ...payload}),
  };

  useEffect(() => {
    fetchEngineers();
  }, [queryParam]);

  return (
    <RootContext.Provider value={{engineers, queryParam, dispatch}}>
      {props.children}
    </RootContext.Provider>
  );
}

export default RootContext;
