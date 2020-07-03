const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.Record

const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
  Record.findAll({ where: { userId: req.user.id }, order: [['date', 'DESC']] })
    .then((records) => {
      return res.render('index', JSON.parse(JSON.stringify({ records })))
    })
    .catch((err) => { return console.error(err) })
})

router.get('/filter', authenticated, (req, res) => {
  const category = req.query.category
  const month = req.query.month
  console.log(category, month)
  let querys = {}
  if (month === '') {
    querys = { category: category, userId: req.user.id }
  } else if (category === '') {
    querys = { month: month, userId: req.user.id }
  } else {
    querys = { category: category, month: month, userId: req.user.id }
  }
  Record.findAll({ where: querys, order: [['date', 'DESC']] })
    .then((records) => {
      return res.render('index', JSON.parse(JSON.stringify({ records, month, category })))
    })
    .catch(() => { return res.sendStatus(500) })
})
module.exports = router
