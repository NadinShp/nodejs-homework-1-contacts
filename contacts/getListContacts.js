const fs = require("fs").promises;
const contactsPath = require("./contactsPath");

const getListContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    error.message = "Cannot read Contacts file";
    throw error;
  }
};

module.exports = getListContacts;
