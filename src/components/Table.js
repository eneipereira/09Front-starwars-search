import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = () => {
  const { isFetching, getPlanets } = useContext(PlanetsContext);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

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
