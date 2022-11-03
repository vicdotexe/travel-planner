const express = require('express');
const router = express.Router();
const {Traveler} = require('../models');

router.get('/', async(req,res)=>{
    const allTravelers = await Traveler.findAll();
    res.json(allTravelers);
})

module.exports = router;