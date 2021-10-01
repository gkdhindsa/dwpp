const mongoose=require('mongoose');
const url=process.env.MONGODB_URL
console.log(url)
mongoose.connect(url)


const validator = require('validator')
