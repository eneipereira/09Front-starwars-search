import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const ActiveFilters = () => {
  const { filter: { filterByNumericValues }, removeFilters } = useContext(PlanetsContext);
  return (
    <section>
      {filterByNumericValues.map(({ id, column, comparison, value }) => (
        <div key={ id } data-testid="filter">
          {`${column.replace('_', ' ')} ${comparison} ${value}`}
          <button type="button" onClick={ () => removeFilters(id, column) }>X</button>
        </div>
      ))}

      {filterByNumericValues.length ? (
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => removeFilters() }
        >
          Remove All

        </button>
      ) : ''}
    </section>
  );
};

export default ActiveFilters;
