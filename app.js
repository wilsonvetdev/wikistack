const express = require("express")
const morgan = require("morgan")
const router = express.Router()
const layout = require("./views/layout")

const app = express()

app.use(morgan("dev"))
app.use(express.static(__dirname + "/public"))

router.use(express.urlencoded({ extended: false }))

// parses json bodies
app.use(express.json())

app.get("/", (req, res) => {
  res.send(layout(''));
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
