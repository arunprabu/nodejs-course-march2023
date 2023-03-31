// establish the connection with mongodb
const Employee = require("../models/employees.model");

exports.getEmployees = (req, res) => {
  console.log("reached getEmployees in controller!!!!");
  
  Employee.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: err.message || 'Some error occurred while fetching employees'
      });
    });
};

exports.createEmployee = (req, res) => {
  console.log("request received");
  // get the form data from req.body
  console.log(req.body);

  // save the above data in db
  // 1. get the req.body [DONE]
  // 2. connect with db [DONE]
  // 3. insert the above data into collection
  // 4. get the confirmation from db and send that back as res
  
  // creating DAO
  const employeeDao = new Employee(req.body);
  // saving to create a new document 
  // by using the syntax of mongoose
  employeeDao.save()
    .then(data => {
      console.log(data);
      res.status(201).json(data);
    })
    .catch( err => {
      console.log(err);
      res.json({
        message: err.message || "Some error occurred while adding employee",
      });
    });
};

exports.getEmployeeById = (req, res) => {
  console.log("request received");
  // receiving URL Param from req.params
  console.log(req.params);
  Employee.findOne({_id: req.params.id})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: err.message || "Some error occurred while fetching employee",
      });
    });
};

exports.updateEmployee = (req, res) => {
  console.log("req received");
  // receiving URL Param from req.params
  console.log(req.params);
  // get the form data from req.body
  console.log(req.body);
  // also try findOneAndUpdate
  Employee.updateOne({ _id: req.params.id }, req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: err.message || "Some error occurred while updating employee",
      });
    });
};
