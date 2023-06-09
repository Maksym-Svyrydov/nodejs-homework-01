const contacts = require('./db');
const { error, log } = require('console');

const invokeAction = async ({ action, contactId, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case 'get':
      const contactById = await contacts.getContactById(contactId);
      return console.log(contactById);

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case 'remove':
      const removeById = await contacts.removeContact(contactId);
      return console.log(removeById);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};
