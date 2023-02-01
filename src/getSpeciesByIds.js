const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) {
    return [];
  }
  const array = [];
  console.log(ids);
  data.species.forEach((id) => (ids.includes(id.id) ? array.push(id) : ''));
  return array;
};

module.exports = getSpeciesByIds;
