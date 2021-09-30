const express = require("express")
const morgan = require("morgan")
const router = express.Router()
const { db, Page, User } = require('./models')
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

const app = express()
app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))
router.use(express.urlencoded({ extended: false }))

// parses json bodies
app.use(express.json())

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })


app.use('/wiki', wikiRouter )
// app.use('/users', userRouter )

app.get('/', (req, res, next) => {
  res.redirect('/wiki')
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
