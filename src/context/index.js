import React, {useState, useEffect} from 'react';
import {query as engineersInitialState, getEngineers} from './engineer';
import {query as companiesInitialState, getCompanies} from './company';

const RootContext = React.createContext();
export function Provider(props) {
  let [engineersQuery, setEngineersQuery] = useState(engineersInitialState);
  let [engineers, setEngineers] = useState([]);
  let [loadingEngineers, setLoadingEngineers] = useState(false);
  let [engineersShowMore, setEngineersShowMore] = useState(true);

  const fetchEngineers = () => {
    if (!engineersQuery.more) {
      setLoadingEngineers(true);
    }
    getEngineers(engineersQuery, (data, {nextPage}) =>
      setEngineers(prevState => {
        setLoadingEngineers(false);
        engineersQuery.nextPage = nextPage;
        if (engineersQuery.more) {
          setEngineersShowMore(true);
          return [...prevState, ...data];
        }
        return data;
      }),
    );
  };

  let [companiesQuery, setCompaniesQuery] = useState(companiesInitialState);
  let [companies, setCompanies] = useState([]);
  let [loadingCompanies, setLoadingCompanies] = useState(false);

  const fetchCompanies = () => {
    setLoadingCompanies(true);
    getCompanies(companiesQuery, (data, {nextPage}) =>
      setCompanies(prevState => {
        setLoadingCompanies(false);
        companiesQuery.nextPage = nextPage;
        if (companiesQuery.more) {
          return [...prevState, ...data];
        }
        return data;
      }),
    );
  };

  const dispatch = {
    fetchEngineers,
    setEngineersShowMore: payload => setEngineersShowMore(payload),
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
      value={{
        engineers,
        engineersQuery,
        engineersShowMore,
        loadingEngineers,
        companies,
        companiesQuery,
        loadingCompanies,
        dispatch,
      }}>
      {props.children}
    </RootContext.Provider>
  );
}

export default RootContext;
