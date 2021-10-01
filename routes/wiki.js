const express = require('express')
const router = express.Router()
const { addPage, layout } = require('../views/')
const { Page } = require('../models')

router.use(express.urlencoded({ extended: false }))

router.get('/', (req, res, next) => {
  res.send('got to get /wiki/')
})

router.post('/', async (req, res, next) => {

  const title = req.body.title
  const content = req.body.content

  try {
    const page = await Page.create({
      title,
      content
    })

    res.redirect('/')
  } catch (error) { next(error)}

})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

module.exports = router
