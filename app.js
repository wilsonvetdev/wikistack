const express = require("express")
const morgan = require("morgan")
const router = express.Router()
const { db, Page, User } = require('./models')
const layout = require("./views/layout")

const app = express()
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

router.use(express.urlencoded({ extended: false }))

// parses json bodies
app.use(express.json())

app.get("/", (req, res) => {
  res.send(layout(''));
})

const PORT = 8080;

const init = async () => {
  await db.sync({force: true})
  // make sure that you have a PORT constant
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init()
