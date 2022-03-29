const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparser = require("body-parser");
const path = require('path');


//log message 

app.use(morgan('tiny'))



const dotenv = require('dotenv')

dotenv.config({path:'config.env'})

const port = process.env.PORT12 || 2001


// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")



//app.set("views", path.resolve(__dirname, "views/folder_B "))


//load assets 
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))




// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.get('/', (req, res) => {
  res.render('index')
})




app.get('/add-user', (req, res) => {
  res.render('add_user')
})




app.get('/update-user', (req, res) => {
  res.render('update_user')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})