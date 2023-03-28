exports.getEmployees = (req, res) => {
  console.log("reached getEmployees in controller!!!!");
  const employees = [
    {
      id: 1,
      name: "John",
      phone: "234534678",
      email: "j@k.com",
    },
    {
      id: 2,
      name: "Steve",
      phone: "76865798",
      email: "s@t.com",
    },
  ];
  res.json(employees);
};

exports.createEmployee = (req, res) => {
  console.log("request received");
  // get the form data from req.body
  console.log(req.body);
  res.json({
    id: 999,
    status: "Employee Created Successfully!",
    ...req.body,
  });
};

exports.getEmployeeById = (req, res) => {
  console.log("request received");
  // receiving URL Param from req.params
  console.log(req.params);
  const employee = {
    id: req.params.id,
    name: "John",
    phone: "234534678",
    email: "j@k.com",
  };
  res.json(employee);
};

exports.updateEmployee = (req, res) => {
  console.log("req received");
  // receiving URL Param from req.params
  console.log(req.params);
  // get the form data from req.body
  console.log(req.body);

  const status = {
    id: req.params.id,
    info: "Updated Successfully",
  };
  res.json(status);
};

