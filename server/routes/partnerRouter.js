const express = require('express');
const router = express.Router();
const Partner = require('../models/partnerModel');

// POST /api/partner
router.post('/partner', async (req, res) => {
  try {
    const { restaurantName, location, deliveryAreas, email, phone ,recentAchivements} = req.body;
console.log(req.body)
    // create a new partner document using the provided Mongoose schema
    const partner = new Partner({
      restaurantName:restaurantName,
      location:location,
      deliveryAreas:deliveryAreas,
      email:email,
      phone:phone,
      recentAchivements:recentAchivements,
    });

   
    // save the new partner document to the database
    await partner.save();

    res.status(201).json({ partner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
