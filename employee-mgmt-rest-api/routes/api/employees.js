var express = require("express");
var router = express.Router();

const employeesController = require('../../controllers/employees.controller');

/* GET employees listing. */
router.get("/", employeesController.getEmployees);

/* POST -- create employee . */
router.post("/", employeesController.createEmployee);

/* GET -- employee details . */
router.get('/:id', employeesController.getEmployeeById);

/* PUT -- employee details . */
router.put('/:id', employeesController.updateEmployee);

// TODO: Try Delete Employee

module.exports = router;
