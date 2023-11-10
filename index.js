const express = require('express')
const app = express()
const userrouter = require('./router/users') //mendefinisikan route
const connectDB = require('./config/db')
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded //agar body terbaca

app.get('/', (req, res) => { //get adalah method
  res.send('Hello World!') //akan menampilkan res dan req yang akan mengirim ke console dengan hello world
})

app.use(userrouter)

connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // muncul di console
})