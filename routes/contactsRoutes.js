  'use strict';
  module.exports = function(app) {
    const contacts = require('../controllers/contactsController');
  
    app.route('/contacts')
      .get(contacts.list_all_contacts)
      .post(contacts.create_a_contact);
    
    app.route('/contacts/:contactId')
      .get(contacts.read_a_contact)
      .put(contacts.update_a_contact)
      .delete(contacts.delete_a_contact)
      ;
  };

  // const routes = require('express').Router();
  // const contacts = require('../controllers/contactsController');
  
  // routes.get('/contacts', contacts.list_all_contacts);
  // routes.post('/contacts', contacts.create_a_contact);
  // routes.get('/contacts', contacts.read_a_contact);
  // // routes.get('/contacts', contacts.list_all_contacts);
  // // routes.get('/courses', contacts.displayCourses);
  // module.exports = routes;