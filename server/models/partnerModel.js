const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  restaurantName: { type: String, required: true },
  location: { type: String, required: true },
  deliveryAreas: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  recentAchivements: { type: String, required: true },
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
