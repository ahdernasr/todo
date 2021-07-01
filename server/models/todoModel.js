import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    text: String,
    done: Boolean
}, {
    timestamps: true
})

const Todos = mongoose.model('Todos', todoSchema)

export default Todos