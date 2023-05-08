const express = require('express');
const router = express.Router();
const Rider = require('../models/riderModel');

// POST /api/rider
router.post('/rider', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, vehicleType ,AboutYourSelf} = req.body;
console.log(req.body)
    // create a new Rider document using the provided Mongoose schema
    const rider = new Rider({
      firstName:firstName,
      lastName:lastName,
      email:email,
      phone:phone,
      vehicleType:vehicleType,
      AboutYourSelf:AboutYourSelf,
    });

   
    // save the new Rider document to the database
    await rider.save();

    res.status(201).json({ rider });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
