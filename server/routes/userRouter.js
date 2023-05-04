const express = require('express')

const router = express.Router()

const User = require('../models/userModel')

router.post('/create-user', (req, res) => {
    
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    // _id: req.body._id,
  })
  
  user.save()
    .then(user => {
      res.status(200).send({ data: user})
    })
    .catch(err => {
      res.status(400).send({ error : err})
    })
})



module.exports = router

// //////new///////////
// const express = require('express');
// const bcrypt = require('bcrypt');
// const User = require('../models/User');

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if user with email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     // Hash password before saving to the database
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user object and save to the database
//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     // Return success message
//     res.status(200).json({ message: 'Account created successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = router;


