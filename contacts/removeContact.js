const getListContacts = require("./getListContacts");
const updateContacts = require("./updateContacts");

const removeContact = async (contactId) => {
  try {
    const contacts = await getListContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      throw new Error("Id is incorrect");
    }
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    await updateContacts(newContacts);
    console.log("Contact is removed");
  } catch (error) {
    throw error;
  }
};
module.exports = removeContact;
