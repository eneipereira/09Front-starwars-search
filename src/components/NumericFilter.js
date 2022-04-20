import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const NumericFilter = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const { handleNumFilterClick } = useContext(PlanetsContext);

  const renderColumns = () => {
    const columnOptions = [
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
    ];

    return (
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {columnOptions.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>
    );
  };

  const renderComparison = () => {
    const comparisonOptions = ['maior que', 'menor que', 'igual a'];

    return (
      <select
        data-testid="comparison-filter"
        style={ { marginLeft: '10px' } }
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
      >
        {comparisonOptions.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>
    );
  };

  const renderValueInput = () => (
    <input
      type="number"
      data-testid="value-filter"
      style={ { maxWidth: '90px', margin: '0px 10px' } }
      min="0"
      value={ value }
      onChange={ ({ target }) => setValue(target.value) }
    />
  );

  return (
    <form onSubmit={ (e) => handleNumFilterClick(e, { column, comparison, value }) }>
      {renderColumns()}
      {renderComparison()}
      {renderValueInput()}
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filter

      </button>
    </form>
  );
};

export default NumericFilter;
