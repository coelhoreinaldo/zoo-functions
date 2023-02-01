const data = require('../data/zoo_data');

const employeeInfo = {
  id: '',
  fullName: '',
  species: [],
  locations: [],
};

const findPerson = (name, id) => data.employees
  .find((employee) => employee.id === id
|| employee.firstName === name || employee.lastName === name);

const getSpeciesByIds = (...ids) => {
  if (!ids) {
    return [];
  }
  const array = [];
  data.species.forEach((id) => (ids.includes(id.id) ? array.push(id) : ''));
  return array;
};

const employeeInfoTemplate = () => data.employees.map((employee) => ({ id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: getSpeciesByIds(...employee.responsibleFor).map((e) => e.name),
  locations: getSpeciesByIds(...employee.responsibleFor).map((e) => e.location),
}));

const getEmployeesCoverage = (employeeObject) => {
  if (!employeeObject) { return employeeInfoTemplate(); }
  const { name, id } = employeeObject;
  if (findPerson(name, id) === undefined) { throw new Error('Informações inválidas'); }
  const currEmpl = findPerson(name, id);
  employeeInfo.id = currEmpl.id;
  employeeInfo.fullName = `${currEmpl.firstName} ${currEmpl.lastName}`;
  employeeInfo.species = getSpeciesByIds(...currEmpl.responsibleFor).map((e) => e.name);
  employeeInfo.locations = getSpeciesByIds(...currEmpl.responsibleFor).map((e) => e.location);
  return employeeInfo;
};

module.exports = getEmployeesCoverage;
