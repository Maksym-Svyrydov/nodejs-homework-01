const { program } = require('commander');
const contacts = require('./db');
const { error, log } = require('console');
const { prependListener } = require('process');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case 'get':
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case 'add':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case 'remove':
      const removeById = await contacts.removeContact(id);
      return console.log(removeById);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('--action, <type>')
  .option('--id, <type>')
  .option('--name, <type>')
  .option('--email, <type>')
  .option('--phone, <type>');
program.parse();
const option = program.opts();
console.log(option);
invokeAction(option);
