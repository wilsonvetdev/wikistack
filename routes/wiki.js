const express = require('express')
const router = express.Router()
const { addPage, layout } = require('../views/')

router.use(express.urlencoded({ extended: false }))

router.get('/', (req, res, next) => {
  res.send('got to get /wiki/')
})

router.post('/', (req, res, next) => {
  res.json(req.body)
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router
