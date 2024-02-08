const connectToMongo = require('./db');
const express= require('express')

connectToMongo();
const app = express()
const PORT = 5000

app.use(express.json())


//Available Routes
app.use('/api/auth', require('./routes/auth'))
//app.use("/api/notes", require("/routes/notes"));

   app.listen(PORT, () => {
    console.log(`Example app Listening at http://localhost:${PORT}`)
})