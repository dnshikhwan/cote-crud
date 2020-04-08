const express = require('express')
const taskRoute = require('./routes/task-route')
const bodyParser = require('body-parser')
const app = express()
const authRoute = require('./routes/auth-route')

app.use(bodyParser.json())
app.use('/tasks' , taskRoute)
app.use('/auth' , authRoute)

app.listen(4000 , () => {
    console.log('listening on port 4000')
})