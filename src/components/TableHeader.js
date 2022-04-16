import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const TableHeader = () => {
  const { headers } = useContext(PlanetsContext);

  const renderHeader = () => (
    <tr>
      {headers
        .filter((header) => header !== 'residents')
        .map((item) => (
          <th key={ item }>{item.replace('_', ' ')}</th>
        ))}
    </tr>
  );

  return (
    <thead>
      {renderHeader()}
    </thead>
  );
};

export default TableHeader;
