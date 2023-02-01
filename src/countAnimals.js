const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return data.species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }
  const filtered = data.species.find((element) => element.name === animal.species);
  if (!animal.sex) {
    return filtered.residents.length;
  }
  const filtered2 = filtered.residents.filter((element) => element.sex === animal.sex);
  return filtered2.length;
};

console.log(countAnimals({ species: 'giraffes', sex: 'male' }));

module.exports = countAnimals;
