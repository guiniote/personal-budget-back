const express = require('express')
const {
  allTransactions,
  submitNewTransaction,
  deleteTransaction,
  updateTransaction,
  homeInfo,
  newTransaction,
} = require('../controllers/indexController')

const router = express.Router()

// example of a route with index controller get function
router.get('/', homeInfo)
router.get('/transaction', allTransactions)
router.get('/transaction/new', newTransaction)
router.post('/transaction/new', submitNewTransaction)
router.delete('/transaction/:id', deleteTransaction)
router.patch('/transaction/:id', updateTransaction)

module.exports = router
