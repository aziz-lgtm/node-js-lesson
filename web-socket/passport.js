
// Setting Up Passport

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(passport.initialize());

passport.use(new LocalStrategy((username, password, done) => {
  // your database look-up and password verification logic goes here
}))

// Authenticating Requests

app.post('/login', passport.authenticate('local'), (req, res) => {
  // if this function runs, then authentication was successful
  res.send(`welcome back, ${req.user.username}!`);
})