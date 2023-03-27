var express = require("express");
var router = express.Router();

/* GET employees listing. */
router.get("/",  (req, res, next) => {
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
    }
  ];
  res.json(employees);
});

/* POST -- create employee . */
router.post('/', (req, res, next) => {
  console.log('request received');
  // get the form data from req.body
  console.log(req.body);
  res.json({
    id: 999,
    status: 'Employee Created Successfully!',
    ...req.body
  });
});

/* GET -- employee details . */
router.get('/:id', (req, res, next) => {
  console.log('request received');
  // receiving URL Param from req.params
  console.log(req.params);
  const employee = {
    id: req.params.id,
    name: "John",
    phone: "234534678",
    email: "j@k.com"
  };
  res.json(employee);
});


module.exports = router;
