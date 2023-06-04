const operations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const data = await operations.listContacts();
      console.table(data);
      break;

    case "get":
      const contact = await operations.getContactById(id);
      console.log(contact);
      break;

    case "add":
          const newContact = await operations.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const delContact = await operations.removeContact(id);
      console.log(delContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: '05olLMgyVQdWRwgKfg5J6' });
// invokeAction({ action: "add", name: "Mango", email: "mango@gmail.com", phone: "322-22-22" });
invokeAction({ action: 'remove', id: 'qdggE76Jtbfd9eWJHrssH' });

