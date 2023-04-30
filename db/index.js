const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const getContactById = async (id) => {
  const contactsId = String(id);
  const contacts = await listContacts();
  result = contacts.find((item) => item.id === contactsId);
  return result || null;
};

const removeContact = async (id) => {
  const contactsId = String(id);
  const contacts = await listContacts();
  const findContacts = contacts.findIndex((item) => item.id === contactsId);
  if (findContacts === -1) {
    return null;
  }
  const [result] = contacts.splice(findContacts, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
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
