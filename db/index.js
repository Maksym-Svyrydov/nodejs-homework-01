const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  result = contacts.find((item) => item.id === contactId);
  return result || null;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const findContacts = contacts.findIndex((item) => item.id === contactId);
  if (findContacts === -1) {
    return null;
  }
  const [result] = contacts.splice(findContacts, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
  // ...твой код
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContacts = {
    id: nanoid(),
    name: name,
    email: email,
    phone: phone,
  };
  contacts.push(newContacts);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContacts;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
