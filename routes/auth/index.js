const express = require('express')
const passport = require('passport')
const router = express.Router()
const { cID, cSecret } = require('../../utils/config')
const GitHubStrategy = require('passport-github2').Strategy

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

router.get('/success', (req, res) => {
  console.log(req.user);
  
  res.send('You have successfully logged in')
})
router.get('/error', (req, res) => res.send('error logging in'))

passport.use(new GitHubStrategy({
    clientID: cID,
    clientSecret: cSecret,
    callbackURL: '/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile)
  }
))

router.get('/github', 
  passport.authenticate('github'))

router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/auth/success')
  })

module.exports = router
