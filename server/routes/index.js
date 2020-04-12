const router = require("express").Router();
const util = require("../util/util");
const employeesList = require("../data/employees.json") || [];

router.get("/", (req, res) => {
  employeesList.length > 0 ? res.send(employeesList) : res.send(null);
});

router.get("/address/:id", (req, res) => {
  const employeeId = Number(req.params.id);
  res.send(util.findById(employeeId, employeesList));
});

module.exports = router;
