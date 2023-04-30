const argv = require('yargs').argv;
const contacts = require('./db');
const { error, log } = require('console');

// TODO: рефакторить
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

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', contactId: 'Z5sbDlS7pCzNsnAHLtDJd' });
// invokeAction({
//   action: 'add',
//   name: 'msv',
//   email: 'msv@mail.com',
//   phone: '777-777-777',
// });
// invokeAction({ action: 'remove', contactId: 'obDO0A0XESLoyo4lPnYQ1' });
