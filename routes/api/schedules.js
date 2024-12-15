const express = require("express");
const router = express.Router();
const { schedules } = require("./data");

// GET all schedules with optional filtering
router.get("/", (req, res) => {
  const { day, shift } = req.query;
  let results = schedules;

  if (day)
    results = results.filter((s) => s.day.toLowerCase() === day.toLowerCase());
  if (shift)
    results = results.filter(
      (s) => s.shift.toLowerCase() === shift.toLowerCase()
    );

  res.json(results);
});

module.exports = router;
