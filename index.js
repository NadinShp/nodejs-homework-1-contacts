const contacts = require("./contacts");
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        const allContacts = await contacts.getListContacts();
        console.table(allContacts);
        break;

      case "get":
        const oneContact = await contacts.getContactById(Number(id));
        console.log(oneContact);
        break;

      case "add":
        const newContact = {
          name,
          email,
          phone,
        };
        const addedContact = await contacts.addContact(newContact);
        console.log(addedContact);
        break;

      case "remove":
        await contacts.removeContact(Number(id));
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.log(error);
  }
};

invokeAction(argv);
