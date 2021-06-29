const fs = require("fs").promises;
const contactsPath = require("./contactsPath");

const updateContacts = async (contacts) => {
  const stringContacts = JSON.stringify(contacts);
  try {
    await fs.writeFile(contactsPath, stringContacts);
  } catch (error) {
    throw error;
  }
};
module.exports = updateContacts;
