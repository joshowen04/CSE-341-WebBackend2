const mongoose = require('mongoose');
Contact = mongoose.model('Contacts');

list_all_contacts = function (req, res) {
  Contact.find({}, function (err, contact) {
    if (err) res.send(err);
    res.json(contact);
  });
};

read_a_contact = function (req, res) {
  Contact.findById(req.params.contactId, function (err, contact) {
    if (err) res.send(err);
    res.json(contact);
  });
};

create_a_contact = function (req, res) {
  const new_contact = new Contact(req.body);
  new_contact.save(function (err, contact) {
    if (err) res.send(err);
    res.status(201).json(contact['_id']);
    // res.json(contact);
  });
};

update_a_contact = function (req, res) {
  Contact.findOneAndUpdate(
    { _id: req.params.contactId },
    req.body,
    { new: true },
    function (err, contact) {
      if (err) res.send(err);
      res.status(204).json({ message: 'Contact successfully updated' });
    }
  );
};

delete_a_contact = function (req, res) {
  Contact.deleteOne({ _id: req.params.contactId }, function (err, contact) {
    if (err) res.send(err);
    res.status(200).json({ message: 'Contact successfully deleted' });
  });
};

module.exports = {
  list_all_contacts,
  read_a_contact,
  create_a_contact,
  update_a_contact,
  delete_a_contact
};
