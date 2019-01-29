const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Hotspot Routes
    const hotspotService = require('../api/hotspot/hotspotService')
    hotspotService.register(router, '/hotspots')
}