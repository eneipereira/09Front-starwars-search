import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const TableBody = () => {
  const { data, filter } = useContext(PlanetsContext);

  const renderBody = () => {
    const { filterByName: { name } } = filter;

    const planets = data.filter((item) => item.name.includes(name)) || data;

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
