import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const TableBody = () => {
  const { data, filter } = useContext(PlanetsContext);

  const planetsByName = () => {
    const { filterByName: { name } } = filter;
    if (name) {
      return data.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
    }

    return data;
  };

  const planetsByValues = (planets) => {
    const { filterByNumericValues } = filter;

    return planets.filter((planet) => {
      let filteredPlanets = [];

      filterByNumericValues.forEach(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          filteredPlanets = +planet[column] > +value;
        }

        if (comparison === 'menor que') {
          filteredPlanets = +planet[column] < +value;
        }

        if (comparison === 'igual a') {
          filteredPlanets = +planet[column] === +value;
        }
        return filteredPlanets;
      });
      return filteredPlanets;
    });
  };

  const renderBody = () => {
    const filteredByName = planetsByName();
    const planets = planetsByValues(filteredByName);
    return (
      planets.map((planet) => (
        <tr key={ planet.name }>
          <td>{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>{planet.films}</td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))
    );
  };

  return (
    <tbody>
      {renderBody()}
    </tbody>
  );
};

export default TableBody;
