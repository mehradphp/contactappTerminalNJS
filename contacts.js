const fs = require('fs');
// import fs from 'fs';
// const chalk = require("chalk");
const addcontacts = (fullname, phone, email) => {
    const contacts = loadContacts();
    const duplicateContact = contacts.find(c => c.fullname === fullname)
    if (!duplicateContact) {
        contacts.push({ fullname, phone, email });
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

module.exports = {
    addcontacts,
}