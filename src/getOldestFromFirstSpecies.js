const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const personId = data.employees.find((employee) => employee.id === id);
  const responsibleForAnimal = personId.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === responsibleForAnimal);
  const oldestAnimal = animal.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestAnimal);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
