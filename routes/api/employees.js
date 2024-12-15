const express = require("express");
const router = express.Router();
const { employees } = require("./data");

// GET all employees
router.get("/", (req, res) => {
  console.log("GET /api/employees called");
  res.json(employees);
});

// POST a new employee
router.post("/", (req, res) => {
  const newEmployee = { id: Date.now(), ...req.body };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

// PUT (Update) an employee
router.put("/:id", (req, res) => {
  const employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee) {
    return res.status(404).send("Employee not found.");
  }
  Object.assign(employee, req.body);
  res.json(employee);
});

// DELETE an employee
router.delete("/:id", (req, res) => {
  const index = employees.findIndex((e) => e.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Employee not found.");
  }
  const deletedEmployee = employees.splice(index, 1);
  res.json(deletedEmployee);
});

module.exports = router;
