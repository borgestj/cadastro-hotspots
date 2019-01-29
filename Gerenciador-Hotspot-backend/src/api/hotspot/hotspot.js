const restful = require('node-restful')
const mongoose = restful.mongoose

const hotspotSchema = new mongoose.Schema({
    hotspot: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Hotspot', hotspotSchema)