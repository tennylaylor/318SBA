const express = require("express");
const app = express();
const path = require("path");

// Import shared data
const { employees, shifts, schedules } = require("./routes/api/data");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set up EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// API Routes
const employeesRouter = require("./routes/api/employees");
const schedulesRouter = require("./routes/api/schedules");

app.use("/api/employees", employeesRouter);
app.use("/api/schedules", schedulesRouter);

// Home Route
app.get("/", (req, res) => {
  try {
    res.render("index", { employees, shifts, schedules });
  } catch (error) {
    console.error("Rendering error:", error.message);
    res.status(500).send("Error rendering the page.");
  }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.stack);
  res.status(500).send("Internal Server Error");
});

// Start the Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
