const passport = require('passport');
// establish the connection with mongodb
const Account = require('../models/accounts.model');

exports.signup = (req, res) => {
  console.log("request received");
  // get the form data from req.body
  console.log(req.body);

  // 1. get the req.body 
  // 2. encrypt the password 
  // 3. get the salt and hash 
  // 4. with that save the data

  // if you have non-strict schema remove
  // the password from req.body and create DAO.
  const accountDao = new Account(req.body);
  accountDao.encryptPassword(req.body.password);
  accountDao.save()
    .then( (result) => {
      res.status(201).json({
        status: 'Account Created Successfully!'
      });
    })
    .catch( (err) => {
      res.json(err);
    });
};

exports.login = (req, res) => {
  console.log("request received");
  // get the form data from req.body
  console.log(req.body);

  passport.authenticate('local', (err, account, info) => {
    if(err) {
      res.json(err)
    }

    // if account is found 
    if(account) {
      // generate Json Web Token (JWT) and send it in res
      const authToken = account.generateJWT();
      res.json({
        status: "Logged In Successfully!",
        token: authToken
      });
    }else {
      // send the info as response
      res.json({
        status: info.message
      })
    }
  })(req, res); // you need to pass the entire req and res object -- not just req.body
};

