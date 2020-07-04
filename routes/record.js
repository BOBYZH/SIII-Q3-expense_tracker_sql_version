const express = require('express')
const router = express.Router()
const db = require('../models')
const Record = db.Record

const { authenticated } = require('../config/auth')

function getSimpleDate () {
  // Adept from Adam Beer's JS code: https://teamtreehouse.com/community/html-input-date-field-how-to-set-default-value-to-todays-date
  let date = new Date()
  let dd = date.getDate()
  let mm = date.getMonth() + 1 // January is 0!
  const yyyy = date.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
  date = yyyy + '-' + mm + '-' + dd
  return date
}

router.get('/new', authenticated, (req, res) => {
  const date = getSimpleDate()
  return res.render('edit', JSON.parse(JSON.stringify({ date })))
})

router.post('/', authenticated, (req, res) => {
  const record = {
    name: req.body.name,
    category: req.body.category,
    date: req.body.date,
    month: req.body.date.substring(5, 7),
    year: req.body.date.substring(0, 4),
    amount: req.body.amount,
    merchant: req.body.merchant,
    userId: req.user.id
  }
  Record.create(record).then(() => {
    return res.redirect('/')
  }).catch((error) => { return res.status(422).json(error) })
})

router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then((record) => {
      const date = getSimpleDate()
      return res.render('edit', JSON.parse(JSON.stringify({ record, date })))
    })
    .catch((error) => { return res.status(422).json(error) })
})

router.put('/:id', authenticated, (req, res) => {
  Record.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then((record) => {
      record.update({
        name: req.body.name,
        category: req.body.category,
        date: req.body.date,
        month: req.body.date.substring(5, 7),
        year: req.body.date.substring(0, 4),
        amount: req.body.amount,
        merchant: req.body.merchant
      }).then(() => {
        return res.redirect('/')
      }).catch((error) => { return res.status(422).json(error) })
    })
})

router.delete('/:id', authenticated, (req, res) => {
  Record.findOne({ where: { id: req.params.id, userId: req.user.id } })
    .then((record) => {
      record.destroy().then(() => {
        return res.redirect('/')
      }).catch((error) => { return res.status(422).json(error) })
    })
})

module.exports = router
