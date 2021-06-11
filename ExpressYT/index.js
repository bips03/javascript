const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')

const app = express()


// it runs the logger function which has access to req,res
// app.use(logger)

// middleware to include body parser to read data
app.use(express.json())
//middleware to read form data
app.use(express.urlencoded({extended : true})


// this gives back every file put in the public folder url
app.use(express.static(path.join(__dirname,'public')))

// we got the router api which takes care of each endpoints
app.use('/tasks',require('./public/routers/apis/task'))

app.listen(4000, () => {
    console.log('Listenting at port 4000')
})
