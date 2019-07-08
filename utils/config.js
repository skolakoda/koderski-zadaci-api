const port = process.env.PORT || 8080
const cID = process.env.CLIENTID
const cSecret = process.env.CLIENTSECRET

const domain =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:${port}`
    : 'https://koderski-zadaci-api.herokuapp.com/'

module.exports = {
    port,
    cID,
    cSecret,
    domain
}