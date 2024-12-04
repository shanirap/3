const mongoose = require('mongoose')
const articleSchema = new mongoose.Schema({
    title: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Article', articleSchema)