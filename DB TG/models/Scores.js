const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScoresSchema = new Schema({
    _userId: String,
    name: {
        type: String,
        text: true,
    },
    scores: {
        esay: Number,
        medium: Number,
        hard: Number,
    }
})

const scores = mongoose.model('scores', ScoresSchema)

module.exports = scores;