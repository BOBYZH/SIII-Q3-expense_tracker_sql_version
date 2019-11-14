const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Hello world, Node.js!")
})

app.listen(3000, ()=> {
  console.log("App is listening!")
})