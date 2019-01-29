const Hotspot = require('./hotspot')

Hotspot.methods(['get', 'post', 'delete'])
//Hotspot.updateOptions({new: true, runValidators: true})

module.exports = Hotspot