const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  entrants.forEach((element) => {
    if (element.age < 18) {
      obj.child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      obj.adult += 1;
    } else {
      obj.senior += 1;
    }
  });
  return obj;
};

const empty = (one) => !one || Object.keys(one).length === 0;

const calculateEntry = (entrants) => {
  if (empty(entrants)) {
    return 0;
  }
  const totalEntries = countEntrants(entrants);
  const { child, adult, senior } = totalEntries;
  let total = 0;
  const keysOfEntries = Object.keys(totalEntries);
  keysOfEntries.forEach((person) => {
    if (person === 'child') {
      total += data.prices.child * child;
    } else if (person === 'adult') {
      total += data.prices.adult * adult;
    } else if (person === 'senior') {
      total += data.prices.senior * senior;
    }
  });
  return total;
};

module.exports = { calculateEntry, countEntrants };
