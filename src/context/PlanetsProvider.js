import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../services/planetsAPI';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getPlanets = async () => {
    setIsFetching(true);
    const response = await planetsAPI();
    const { results } = response;
    setData(results);
    setHeaders(Object.keys(results[0]));
    setIsFetching(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const contextValue = {
    data,
    isFetching,
    headers,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      { children }
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
