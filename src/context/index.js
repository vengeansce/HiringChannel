import React, {useState, useEffect} from 'react';
import {query as engineersInitialState, getEngineers} from './engineer';
import {query as companiesInitialState, getCompanies} from './company';

const RootContext = React.createContext();
export function Provider(props) {
  let [engineersQuery, setEngineersQuery] = useState(engineersInitialState);
  let [engineers, setEngineers] = useState([]);

  const fetchEngineers = () =>
    getEngineers(engineersQuery, (data, {nextPage}) =>
      setEngineers(prevState => {
        engineersQuery.nextPage = nextPage;
        if (engineersQuery.more) {
          return [...prevState, ...data];
        }
        return data;
      }),
    );

  let [companiesQuery, setCompaniesQuery] = useState(companiesInitialState);
  let [companies, setCompanies] = useState([]);

  const fetchCompanies = () =>
    getCompanies(companiesQuery, (data, {nextPage}) =>
      setCompanies(prevState => {
        companiesQuery.nextPage = nextPage;
        if (companiesQuery.more) {
          return [...prevState, ...data];
        }
        return data;
      }),
    );

  const dispatch = {
    fetchEngineers,
    setEngineersQuery: payload =>
      setEngineersQuery({...engineersQuery, ...payload}),
    fetchCompanies,
    setCompaniesQuery: payload =>
      setCompaniesQuery({...companiesQuery, ...payload}),
  };

  useEffect(() => {
    fetchEngineers();
    fetchCompanies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [engineersQuery, companiesQuery]);

  return (
    <RootContext.Provider
      value={{engineers, engineersQuery, companies, companiesQuery, dispatch}}>
      {props.children}
    </RootContext.Provider>
  );
}

export default RootContext;
