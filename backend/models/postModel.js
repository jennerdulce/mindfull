const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requried: true,
        ref: 'User' // Which MODEL this objectID in type refers to
    },
    title: {
        type: String,
        required: [true, 'Please add text value']
    },
    mood: {
        type: String,
    },
    body: {
        type: String,
        required: [true, 'Please add text value']
    },
    color: {
        type: String,
        required: [true, 'Please add text value']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)