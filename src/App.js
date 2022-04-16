import React from 'react';
import NameFilter from './components/NameFilter';
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
      <Table />
    </PlanetsProvider>
  );
}

export default App;
