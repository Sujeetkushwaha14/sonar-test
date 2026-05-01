const express = require("express");
const app = express();

app.use(express.json());

// ❌ Bug 1: Hardcoded secret
const password = "admin123";

// ❌ Bug 2: SQL Injection risk (simulated)
app.get("/user", (req, res) => {
  const id = req.query.id;
  const query = "SELECT * FROM users WHERE id = " + id; // unsafe
  res.send("Query: " + query);
});

// ❌ Bug 3: No error handling
app.get("/divide", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  const result = a / b; // divide by zero issue
  res.send({ result });
});

// ❌ Bug 4: Unused variable
const unused = "I am useless";

// ❌ Bug 5: Blocking code
app.get("/block", (req, res) => {
  while (true) {} // infinite loop
});

// ❌ Bug 6: Duplicate code
function sum(a, b) {
  return a + b;
}
function sum2(a, b) {
  return a + b;
}

// ❌ Bug 7: No input validation
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username == "admin" && password == "admin") {
    res.send("Login success");
  } else {
    res.send("Login failed");
  }
});

// ❌ Bug 8: Console logs in production
console.log("Server starting...");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});