import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const NameFilter = () => {
  const { handleFilterChange } = useContext(PlanetsContext);
  return (
    <div style={ { display: 'flex', justifyContent: 'center', marginBottom: '10px' } }>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Search Planets..."
        onChange={ (e) => handleFilterChange(e) }
      />
    </div>
  );
};

export default NameFilter;
