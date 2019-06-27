const express = require('express')
const passport = require('passport')
const router = express.Router()
//const GitHubStrategy = require('passport-github2').Strategy

// Passport session setup
passport.serializeUser((user, done) => {
    done(null, user)
  })
  
  passport.deserializeUser((obj, done) => {
    done(null, obj)
  })
// Inicijalizacija Passport-a
router.use(passport.initialize())
router.use(passport.session())



// Passport odradjuje sve , nece biti potrebe izdvajati logout rutu!
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
  
module.exports = router
