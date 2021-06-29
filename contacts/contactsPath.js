const path = require("path");

const { dir } = path.parse(__dirname);
const contactsPath = path.join(dir, "db/contacts.json");

module.exports = contactsPath;
