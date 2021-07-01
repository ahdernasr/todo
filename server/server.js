import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import todoRoutes from './routes/todos.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/todos', todoRoutes)

const CONNECTION_URL = `mongodb+srv://ahmed:ahmed123@cluster0.jtfyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, console.log(`Server running on port: ${PORT}`))
}).catch((error) => {
    console.log(error.message)
})

mongoose.set('useFindAndModify', false);