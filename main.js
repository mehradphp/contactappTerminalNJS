const fs = require('fs');

const person = [
    { id: 1, fullname: "mehrdad khodaverdi" },
    { id: 2, fullname: "ali khodav" },
    { id: 3, fullname: "da muuler" },
];

fs.writeFileSync('contacts.json', JSON.stringify(person));