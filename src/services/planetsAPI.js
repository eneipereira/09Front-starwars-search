const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsAPI = async () => {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return data;
};

export default planetsAPI;
