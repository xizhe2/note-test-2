//to load db
var db = require('./db.js');

//we need to test handleSignup with its args also db.saveUser as well
module.exports.handleSignup = (email, password) => {
  //check if emial already exists

  //save the user to the database
  db.saveUser({email, password}); //to save a user obj with ES6 syntaxe
  //send the welcome email
};
