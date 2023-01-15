var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: 'Kindly enter the First Name'
  }
  , lastName: {
    type: String,
    required: 'Kindly enter the Last Name'
  }
  , email: {
    type: String,
    required: 'Kindly enter the email'
  }
  , favoriteColor: {
    type: String,
    required: 'Kindly enter the favorite Color'
  }
  , birthday: {
    type: String,
    required: 'Kindly enter the favorite Color'
  }
});

module.exports = mongoose.model('Contacts', ContactSchema);