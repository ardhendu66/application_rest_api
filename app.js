const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require('./conn')

app.use(express.json())
app.get('/', function(req,res){
    res.send(`<h1>In Home page right now</h1>`)
})
app.use('/comp', require('./src/router/route'))

app.listen(port, function(){
    console.log(`Server running on PORT: http://localhost:${port}`)
})