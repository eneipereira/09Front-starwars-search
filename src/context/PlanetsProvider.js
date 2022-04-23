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
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
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

  const handleFilterChange = ({ target: { value: val } }) => {
    setFilter({
      ...filter,
      filterByName: {
        name: val,
      },
    });
  };

  const handleNumFilterClick = (filters) => {
    setFilter({
      ...filter,
      filterByNumericValues: filter.filterByNumericValues.concat(filters),
    });
  };

  const removeFilters = (id = '', col) => {
    const { filterByNumericValues } = filter;
    if (!id) {
      setFilter({
        ...filter,
        filterByNumericValues: [],
      });
      setColumn('population');
    } else {
      setFilter({
        ...filter,
        filterByNumericValues: filterByNumericValues.filter((item) => item.id !== id),
      });
      setColumn(col);
    }
  };

  const contextValue = {
    data,
    isFetching,
    headers,
    filter,
    column,
    comparison,
    value,
    getPlanets,
    handleFilterChange,
    handleNumFilterClick,
    removeFilters,
    setColumn,
    setComparison,
    setValue,
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
