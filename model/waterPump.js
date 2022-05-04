const mongoose = require('mongoose')

const WaterSchema = new mongoose.Schema(
	{
		waterPump: { 
			type: Boolean, 
			required: true }
	},
	{ collection: 'PumpStatus' }
)

const model = mongoose.model('WaterSchema', WaterSchema)

module.exports = model
