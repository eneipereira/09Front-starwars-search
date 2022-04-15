import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = () => {
  const { isFetching } = useContext(PlanetsContext);

  return (
    <div>
      {isFetching ? <p>Loading...</p> : (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      )}
    </div>
  );
};

export default Table;
