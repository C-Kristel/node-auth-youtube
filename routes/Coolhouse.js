const router = require('express').Router();
const Activestat = require('../model/Coolhouse')

// Start Coolhouse Active Status
router.post('/api/Coolhouse', async (req, res) => {
	const { ActiveStatus } = req.body

	if (!ActiveStatus || typeof ActiveStatus !== 'boolean') {
		return res.json({ status: 'error', error: 'Invalid' })
	} 

	try {
		const response = await Activestat.create({
			ActiveStatus
		})
		console.log('Coolhouse activity status logged successfully: ', response)
	} catch (error) {
		if (error.code === 400) {
			// duplicate key
			return res.json({ status: 'error', error: 'Error' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

router.get('/api/Coolhouse', (req,res) => {
    res.send(Coolhouse);
});
// End Coolhouse Active status
module.exports = router;