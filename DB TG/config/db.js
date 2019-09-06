const mongoose =  require("mongoose");

const mongoURI = 'mongodb+srv://nadirdb:nadir123123@cluster0-24iqy.mongodb.net/nadir?retryWrites=true&w=majority'

mongoose.connect(mongoURI);

module.exports = mongoose;