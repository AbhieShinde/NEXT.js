const { default: mongoose } = require("mongoose");

const HeroSchema = new mongoose.Schema({
    superHero: {
        type: String,
        require: [true, 'Please name the hero'],
        unique: true,
        trim: true
    },
    realName: {
        type: String,
        require: true,
        maxlength: [200, 'Please keep real name short']
    },
})

// checking first is there a model already defined/initiated and returns that else create Hero model
module.exports = mongoose.models.Hero || mongoose.model('Hero', HeroSchema)