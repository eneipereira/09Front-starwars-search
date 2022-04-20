import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import planetsAPI from '../services/planetsAPI';

const POS = 1;
const NEG = -1;
const ZERO = 0;

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const getPlanets = useCallback(async () => {
    setIsFetching(true);
    const response = await planetsAPI();
    const { results } = response;
    results.sort((a, b) => {
      if (a.name > b.name) return POS;
      if (a.name < b.name) return NEG;
      return ZERO;
    });
    setData(results);
    setHeaders(Object.keys(results[ZERO]));
    setIsFetching(false);
  }, []);

  const handleFilterChange = ({ target: { value } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: value,
      },
    });
  };

  const handleNumFilterClick = (filters) => {
    setFilter({
      ...filter,
      filterByNumericValues: filter.filterByNumericValues.concat(filters),
    });
  };

  const contextValue = {
    data,
    isFetching,
    headers,
    filter,
    getPlanets,
    handleFilterChange,
    handleNumFilterClick,
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
