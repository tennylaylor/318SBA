const express = require("express");
const app = express();
const path = require("path");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
const employeesRouter = require("./routes/api/employees.js/index.js");
const schedulesRouter = require("./routes/api/schedules.js");

app.use("/api/employees", employeesRouter);
app.use("/api/schedules", schedulesRouter);

// Rendered View
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", { title: "Warehouse Schedule" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.stack);
  res.status(500).send("Something broke!");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
