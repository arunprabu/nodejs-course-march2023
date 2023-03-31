var passport = require("passport");
var LocalStrategy = require("passport-local");
const Account = require('../models/accounts.model');

// basic config for login using passport local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      console.log(email);
      
      // connect with account model 
      // check whether account with this email found
      Account.findOne({ email: email })
        .then( (account) => {
          // if yes
          // validate password
          console.log(account);
          
          if(!account.validatePassword(password)){
            // if p/w wrong -- return with error
            return done(null, false, {
              message: "Password is wrong",
            });
          } 
          // if password matches
          return done(null, account);
        })
        .catch(err => {
          // if no email found -- return with error
          console.log(err);
          return done(null, false, {
            message: 'Incorrect email or password'
          });
        })
    }
  )
);

// DO NOT FORGET THE CHANGES IN app.js file related to passport