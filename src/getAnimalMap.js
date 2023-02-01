const data = require('../data/zoo_data');

const speciesLocations = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const locationsKeys = Object.keys(speciesLocations);

const getAnimalLocations = (array) => {
  array.forEach((location) => {
    const filtered = data.species.filter((specie) => specie.location === location);
    speciesLocations[location] = filtered.map((animal) => animal.name);
  });
};

const getResidents = (currSpecie, sex) => {
  const find = data.species.find((specie) => specie.name === currSpecie);
  const filterFemale = find.residents.filter((resident) => resident.sex === 'female');
  const filterMale = find.residents.filter((resident) => resident.sex === 'male');
  if (sex === 'female') {
    return filterFemale.map((resident) => resident.name);
  }
  if (sex === 'male') {
    return filterMale.map((resident) => resident.name);
  }
  return find.residents.map((resident) => resident.name);
};

const includeNamesTrue = (array, sex) => {
  array.forEach((location) => {
    const filtered = data.species.filter((specie) => specie.location === location);
    speciesLocations[location] = filtered.map((animal) => ({
      [animal.name]: getResidents(animal.name, sex),
    }));
  });
  return speciesLocations;
};

const includeNamesTrueAndSortedTrue = (array, sex) => {
  array.forEach((location) => {
    const filtered = data.species.filter((specie) => specie.location === location);
    speciesLocations[location] = filtered.map((animal) => ({
      [animal.name]: getResidents(animal.name, sex).sort(),
    }));
  });
  return speciesLocations;
};

const getAnimalMap = (options) => {
  if (!options) {
    getAnimalLocations(locationsKeys);
    return speciesLocations;
  }
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    includeNamesTrue(locationsKeys, sex);
  }
  if (includeNames && sorted) {
    includeNamesTrueAndSortedTrue(locationsKeys, sex);
  }
  return speciesLocations;
};

module.exports = getAnimalMap;
