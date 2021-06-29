const getListContacts = require("./getListContacts");

const getContactById = async (id) => {
  try {
    const contacts = await getListContacts();
    const findContactById = contacts.find((contact) => contact.id === id);
    if (!findContactById) {
      throw new Error("Id is incorrect ");
    }
    return findContactById;
  } catch (error) {
    throw error;
  }
};
module.exports = getContactById;
