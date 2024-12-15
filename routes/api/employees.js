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
  console.log("POST /api/employees - Employee added:", newEmployee);
  res.status(201).json(newEmployee);
});

// PUT (Update) an employee
router.put("/:id", (req, res) => {
  const employee = employees.find((e) => e.id === parseInt(req.params.id));
  if (!employee) {
    console.log("PUT /api/employees/:id - Employee not found");
    return res.status(404).send("Employee not found.");
  }
  Object.assign(employee, req.body);
  console.log("PUT /api/employees/:id - Employee updated:", employee);
  res.json(employee);
});

// DELETE an employee
router.delete("/:id", (req, res) => {
  const index = employees.findIndex((e) => e.id === parseInt(req.params.id));
  if (index === -1) {
    console.log("DELETE /api/employees/:id - Employee not found");
    return res.status(404).send("Employee not found.");
  }
  const deletedEmployee = employees.splice(index, 1);
  console.log("DELETE /api/employees/:id - Employee deleted:", deletedEmployee);
  res.json(deletedEmployee);
});

module.exports = router;
