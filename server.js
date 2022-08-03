const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set('view engine', 'ejs')
//app.set('views', path.resolve(__dirname, 'views/ejs'))  => (just for reference: if you create an ejs folder for your ejs files inside views folder)

//load assets... e.g. css/style.css => if you want to access stule.css file. you dont need to specify the projects folder's name, the assets folder...
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/add-question', (req, res) => {
  res.render('add_question');
})

app.get('/update-question', (req, res) => {
  res.render('update_question');
})

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})
