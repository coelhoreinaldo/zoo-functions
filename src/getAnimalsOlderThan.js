const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimal = data.species.find((specie) => specie.name === animal);
  const minimumAge = findAnimal.residents.every((resident) => resident.age > age);
  return minimumAge;
};

console.log(getAnimalsOlderThan('lions', 3));
module.exports = getAnimalsOlderThan;
