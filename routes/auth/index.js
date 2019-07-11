const express = require('express')
const passport = require('passport')
const router = express.Router()
const { cID, cSecret } = require('../../utils/config')
const User = require('../../models/User')
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

router.get('/success', async (req, res) => {
  const email  = req.user.emails[0].value
  const slika  = req.user.photos[0].value
  const { displayName: ime, username, profileUrl: url } = req.user
  const user = await User.findOne({ email })
  
  if(user){
    console.log(`Korisnik vec postoji`)
    res.redirect('/')
  }

  const noviUser = new User ({ email, slika, ime, username, url })
    const token = noviUser.napraviToken()
    noviUser.save()
    .then(data => {console.log(`Ubacen u bazu: ${data.email} + ${noviUser}`)
      res.header('x-auth-token', token).json({msg: 'Dobili ste pristupni token', data: token})})
    .catch(err => res.status(400).send(err.message))
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

  router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

module.exports = router
