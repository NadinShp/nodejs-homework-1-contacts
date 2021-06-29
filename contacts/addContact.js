const getListContacts = require("./getListContacts");
const { v4 } = require("uuid");
const updateContacts = require("./updateContacts");

const addContact = async (obj) => {
  const newContact = { id: v4(), ...obj };
  try {
    const contacts = await getListContacts();
    const newContacts = [...contacts, newContact];
    await updateContacts(newContacts);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = addContact;
