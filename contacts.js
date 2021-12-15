const { table } = require('console');
const fs = require('fs');
// const chalk = require("chalk");
const addcontacts = (fullname, phone, email) => {
    const contacts = loadContacts();
    const duplicateContact = contacts.find(c => c.fullname === fullname)
    if (!duplicateContact) {
        contacts.push({ fullname, phone, email });
        saveContacs(contacts);
        console.log("conntact save");
    } else {
        console.log("contact alredy exist");
    }

}
const listContacts = () => {
    const contacts = loadContacts();
    if (contacts.length > 0) {
        // console.log(chalk.yellow("your contacts:\n"));
        console.log("your contacts:\n");
        console.table(contacts);

    } else {
        // console.log(chalk.red("you dont have any contacts"));
        console.log("you dont have any contacts");
    }
}
const removeContacts = fullname => {
    const contacts = loadContacts();
    const filterdContacts = contacts.filter(c => c.fullname !== fullname);
    if (contacts.length > filterdContacts.length) {
        saveContacs(filterdContacts);
        console.log(`${fullname} has been remove.`);
    } else {
        console.log('contact not found');
    }
}

const loadContacts = () => {
    try {
        const dataBuffer = fs.readFileSync("contacts.json");
        const contacts = dataBuffer.toString();
        return JSON.parse(contacts);
    } catch (ex) {
        // console.log(ex);
        return [];
    }
}
const saveContacs = contacts => {
    const data = JSON.stringify(contacts);
    fs.writeFileSync("contacts.json", data)
}

module.exports = {
    addcontacts,
    listContacts,
    removeContacts
}