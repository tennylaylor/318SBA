// Shared data arrays
const employees = [
  { id: 1, name: "Alice", position: "Manager" },
  { id: 2, name: "Bob", position: "Warehouse Worker" },
];

const shifts = [
  { id: 1, employeeId: 1, shift: "Morning" },
  { id: 2, employeeId: 2, shift: "Night" },
];

const schedules = [
  { day: "Monday", shift: "Morning", assignedTo: "Alice" },
  { day: "Monday", shift: "Night", assignedTo: "Bob" },
];

module.exports = { employees, shifts, schedules };
