let sqlite = require('sqlite3')
let db = new sqlite.Database('./database.db')

//## TABLE SETUP ##
// Conspiracy
// -- description TEXT
// -- "proof" TEXT
// -- mainstream_science TEXT
// -- year TEXT
// -- people_id INTEGER

const conspiracyTableQuery =
`CREATE TABLE IF NOT EXISTS conspiracy (
  description TEXT,
  proof TEXT,
  mainstream_science TEXT,
  year TEXT)`

// Location
// -- name TEXT

const locationTableQuery =
`CREATE TABLE IF NOT EXISTS location (
  name TEXT)`

// Episodes
// -- season INTEGER
// -- episode INTEGER

const episodesTableQuery =
`CREATE TABLE IF NOT EXISTS episodes (
  season INTEGER,
  episode INTEGER)`

//database creation
db.run(conspiracyTableQuery, error => {
  if(error) console.log("conspiracy table DESTROYED by aliens", error)
  else console.log("conspiracy table created...by aliens!")
})

db.run(locationTableQuery, error => {
  if(error) console.log("location table DESTROYED by aliens", error)
  else console.log("location table created...by aliens!")
})

db.run(episodesTableQuery, error => {
  if(error) console.log("episodes table DESTROYED by aliens", error)
  else console.log("episodes table created...by aliens!")
})
module.exports = db
