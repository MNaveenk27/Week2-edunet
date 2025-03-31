const mongoose = require('mongoose');

const auctionDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startingBid: {
        type: Number,
        required: true
    },
    currentBid: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
});

const Auctiondata = mongoose.model('Auctiondata', auctionDataSchema);

module.exports = Auctiondata;
