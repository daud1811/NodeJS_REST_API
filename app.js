require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const Port = process.env.PORT || 3000;
const app = express();
const cors = require('cors')

// Connect Database
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to Database")
})


// Middlewares
app.use(express.json())
app.use(cors())


//Routes
const productRoute = require('./routes/productRoute')
const catRoute = require('./routes/catRoute')

app.use('/product', productRoute)
app.use('/cat', catRoute)



app.listen(Port, () => {
    console.log(`Server started at port ${Port}`)
})
