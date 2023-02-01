const data = require('../data/zoo_data');

const weekDays = {
  Tuesday: { officeHour: '', exhibition: [] },
  Wednesday: { officeHour: '', exhibition: [] },
  Thursday: { officeHour: '', exhibition: [] },
  Friday: { officeHour: '', exhibition: [] },
  Saturday: { officeHour: '', exhibition: [] },
  Sunday: { officeHour: '', exhibition: [] },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const weekDaysKeys = Object.keys(weekDays);
const dataKeys = Object.keys(data.hours);

const empty = (scheduleTarget, getAnimal) => !scheduleTarget || getAnimal === undefined;

const getScheduleTemplate = () => {
  weekDaysKeys.pop();
  dataKeys.pop();
  Object.keys(data.hours).forEach((day, index) => {
    if (day === weekDaysKeys[index]) {
      weekDays[day]
        .officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
      const filtered = data.species.filter((specie) => specie.availability.includes(day));
      filtered.forEach((animal) => weekDays[day].exhibition.push(animal.name));
    }
  });
};

getScheduleTemplate();

const getSchedule = (scheduleTarget) => {
  const getAnimal = data.species.find((animal) => animal.name === scheduleTarget);
  if (scheduleTarget === 'Monday') { return { Monday: weekDays.Monday }; }
  if (weekDaysKeys.includes(scheduleTarget)) {
    return { [scheduleTarget]: weekDays[scheduleTarget] };
  }
  if (empty(scheduleTarget, getAnimal)) {
    return weekDays;
  }
  return getAnimal.availability;
};

module.exports = getSchedule;
