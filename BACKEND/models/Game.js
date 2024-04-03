const mongoose  = require('mongoose');

const Schema  = mongoose.Schema;

const gameSchema = new Schema({
    GameTitle :{
        type: String,
        required: true
    },
    GameGenre :{
        type: String,
        required: true
    },
    RAM: {
        type: String,
        required: true
    },
    GPU: {
        type: String,
        required :true
    },
    ROM: {
        type: String,
        required :true
    }

})

const Game = mongoose.model("Game",gameSchema);
module.exports = Game;
