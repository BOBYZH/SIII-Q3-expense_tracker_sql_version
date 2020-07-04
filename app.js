const express = require('express')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')

app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: require('./config/handlebars-helpers')
}))
app.set('view engine', 'handlebars')

app.use(methodOverride('_method'))

app.use(session({
  secret: 'your secret key',
  cookie: { maxAge: 86400000 }, // 延長到一天， 以免用到一半被登出
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)

app.use(flash())

// get user info
app.use((req, res, next) => {
  res.locals.user = req.user
  res.locals.isAuthenticated = req.isAuthenticated()
  // new two flash message variables
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use('/', require('./routes/home'))
app.use('/records', require('./routes/record'))
app.use('/users', require('./routes/user'))
app.use('/auth', require('./routes/auths'))

app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening!')
  console.log('Enter http://localhost:3000/ if you run this app on your local computer.')
})
