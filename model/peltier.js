const mongoose = require('mongoose')

const PeltierSchema = new mongoose.Schema(
	{
		peltierFans: { 
			type: Boolean, 
			required: true },
        peltierNum: {
			type: [String],
			required:true
		},
        miniFans: {
            type: Boolean,
            required: true
        },
        minimFanNum: {
            type: [String],
			required:true
        }
	},
	{ collection: 'PeltierStatus' }
)

const model = mongoose.model('PeltierSchema', PeltierSchema)

module.exports = model
