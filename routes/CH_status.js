const router = require('express').Router();
const Coolhouse = require('../model/chstats')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.Secret

// Start Coolhouse Status


/*router.post('/api/chstatus', async (req, res) => {
	const { ch_temp, r_temp, water_level, soil_temp, soil_moisture, pH_lvl, humidity_lvl, date, time } = req.body
	const coolhouse = await chstats.findOne({ ch_temp, r_temp, water_level, soil_temp, soil_moisture, pH_lvl, humidity_lvl, date, time }).lean() 

	if (!coolhouse) {
		return res.json({ status: 'error', error: 'Invalid data' })
	}

	//if (bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
                ch_temp: chstats.ch_temp, 
                r_temp: chstats.r_temp, 
                water_level: chstats.water_level, 
                soil_temp: chstats.soil_temp, 
                soil_moisture: chstats.soil_moisture, 
                pH_lvl: chstats.pH_lvl, 
                humidity_lvl: chstats.humidity_lvl, 
                date: chstats.date, 
                time: chstats.time
			
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	
}) */

router.post('/api/chstatus', async (req, res) => {
	const { ch_temp, r_temp, water_level, soil_temp, soil_moisture, pH_lvl, humidity_lvl, date } = req.body
	const coolhouse = await Coolhouse.findOne({ ch_temp, r_temp, water_level, soil_temp, soil_moisture, pH_lvl, humidity_lvl, date }).lean() 


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
    //if (!time || typeof time !== 'date') {
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

// End Coolhouse status
module.exports = router;