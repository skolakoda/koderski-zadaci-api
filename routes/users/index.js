const express = require('express')
const passport = require('passport')
const router = express.Router()
const GitHubStrategy = require('passport-github2').Strategy

const GITHUB_CLIENT_ID = "f0dabb36cf5edeac0717"
const GITHUB_CLIENT_SECRET = "8540a41f076f0a466cf18ab2dd40b560d9101074"

router.get('/auth', (req, res) => res.sendFile('auth.html', { root : __dirname}))
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

router.get('/success', (req, res) => res.send('You have successfully logged in'))
router.get('/error', (req, res) => res.send('error logging in'))

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
      return cb(null, profile)
  }
))

router.get('/auth/github',
  passport.authenticate('github'))

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success')
  })

// Passport odradjuje sve , nece biti potrebe izdvajati logout rutu!
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })
  
module.exports = router
