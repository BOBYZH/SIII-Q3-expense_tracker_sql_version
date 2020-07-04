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
  const year = req.query.year
  console.log(category, month, year)
  if (year === '' && month === '' && category === '') {
    return res.redirect('/')
  } else {
    let querys = {}
    if (category === '') {
      if (month === '') {
        querys = { year: year, userId: req.user.id }
      } else if (year === '') {
        querys = { month: month, userId: req.user.id }
      } else {
        querys = { year: year, month: month, userId: req.user.id }
      }
    } else if (month === '') {
      if (category === '') {
        querys = { year: year, userId: req.user.id }
      } else if (year === '') {
        querys = { category: category, userId: req.user.id }
      } else {
        querys = { category: category, year: year, userId: req.user.id }
      }
    } else if (year === '') {
      if (category === '') {
        querys = { month: month, userId: req.user.id }
      } else if (month === '') {
        querys = { category: category, userId: req.user.id }
      } else {
        querys = { category: category, month: month, userId: req.user.id }
      }
    } else {
      querys = { category: category, year: year, month: month, userId: req.user.id }
    }
    Record.findAll({ where: querys, order: [['date', 'DESC']] })
      .then((records) => {
        return res.render('index', JSON.parse(JSON.stringify({ records, month, year, category })))
      })
      .catch(() => { return res.sendStatus(500) })
  }
})
module.exports = router
