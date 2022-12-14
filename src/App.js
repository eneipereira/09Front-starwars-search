import React from 'react';
import ActiveFilters from './components/ActiveFilters';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1
        style={ { textAlign: 'center' } }
      >
        Projeto Star Wars - Trybe
      </h1>
      <NameFilter />
      <NumericFilter />
      <ActiveFilters />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
