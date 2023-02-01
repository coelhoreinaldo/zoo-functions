const data = require('../data/zoo_data');

const isManager = (id) => {
  const currEmployee = data.employees.find((employee) => employee.id === id);
  return data.employees.some((employee) => employee.managers.includes(currEmployee.id));
};

const getRelatedEmployees = (managerId) => {
  const arr = [];
  if (isManager(managerId)) {
    data.employees
      .forEach((employee) => (employee.managers
        .includes(managerId) ? arr.push(`${employee.firstName} ${employee.lastName}`) : ''));
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return arr;
};

module.exports = { isManager, getRelatedEmployees };
