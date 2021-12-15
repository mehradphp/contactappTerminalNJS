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


const loadContacts = () => {
    try {
        const dataBuffer = fs.readFileSync("contacts.json");
        const contacts = dataBuffer.toString();
        return JSON.parse(contacts);
    } catch (ex) {
        console.log(ex);
        return [];
    }

}
const saveContacs = contacts => {
    const data = JSON.stringify(contacts);
    fs.writeFileSync("contacts.json", data)
}

module.exports = {
    addcontacts,
}