const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/CompanyMernApp")
.then(function(ans){
    console.log('Database connected on PORT: mongodb://127.0.0.1:27017/CompanyMernApp')
}).catch(function(err){
    console.error(err)
})