const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const User = require('../models/index');

module.exports = function(passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' },
    function (email,password,done) {
        User.findOne({where : {
            email: email
        }}).then(function (user) {
            bcrypt.compare(password, user.password, function (err,result) {
                if (err) { return done(err); }
                if(!result) {
                    return done(null, false, { message: 'Incorrect username and password' });
                }
                return done(null, user);
            })
        }).catch(function (err) {
            return done(err);
        })
    }
));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
