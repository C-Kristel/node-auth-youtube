const router = require('express').Router();
const Coolhouse = require('../model/chstats')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.Secret

// Start Coolhouse Status

router.post('/api/chstatus', async (req, res) => {
	const { ch_temp, r_temp, water_level, soil_temp, soil_moisture, pH_lvl, humidity_lvl, date } = req.body
	//const coolhouse = await Coolhouse.findOne({ ch_temp, r_temp, water_level, soil_temp, soil_moisture, pH_lvl, humidity_lvl, date }).lean() 


	if (!ch_temp || typeof ch_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid temperature' })
	}
	
	if (!r_temp || typeof r_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid room temperature' })
	}

	if (!water_level || typeof water_level !== 'string') {
		return res.json({ status: 'error', error: 'Invalid water level' })
	}

    if (!soil_temp || typeof soil_temp !== 'string') {
		return res.json({ status: 'error', error: 'Invalid soil temperature' })
	}
    if (!soil_moisture || typeof soil_moisture !== 'string') {
		return res.json({ status: 'error', error: 'Invalid soil moisture' })
	}
    if (!pH_lvl || typeof pH_lvl !== 'string') {
		return res.json({ status: 'error', error: 'Invalid pH level' })
	}
    if (!humidity_lvl || typeof humidity_lvl !== 'string') {
		return res.json({ status: 'error', error: 'Invalid humidity level' })
	}
    if (!date || typeof date !== 'string') {
		return res.json({ status: 'error', error: 'Invalid date' })
	}
    //if (!coolhouse || typeof time !== 'date') {
	//	return res.json({ status: 'error', error: 'Invalid time' })
	//}

	try {
		const response = await Coolhouse.create({
			ch_temp, 
            r_temp, 
            water_level, 
            soil_temp, 
            soil_moisture, 
            pH_lvl, 
            humidity_lvl, 
            date, 
            //time
		})
		console.log('Coolhouse status saved successfully: ', response)
	} catch (error) {
		if (error.code === 400) {
			// duplicate key
			return res.json({ status: 'error', error: 'Error' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

router.get('/api/chstatus', (req,res) => {
    res.send(Coolhouse);
});
// End Coolhouse status
module.exports = router;