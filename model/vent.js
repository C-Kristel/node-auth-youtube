const mongoose = require('mongoose')

const VentSchema = new mongoose.Schema(
	{
		ventFans: { 
			type: Boolean, 
			required: true },
		ventNum: {
			type: [String],
			required:true
		},
	},
	{ collection: 'VentStatus' }
)

const model = mongoose.model('VentSchema', VentSchema)

module.exports = model