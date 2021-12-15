const fs = require('fs');

const person = [
    { id: 1, fullname: "mehrdad khodaverdi" },
    { id: 2, fullname: "ali khodav" },
    { id: 3, fullname: "da muuler" },
];

// fs.writeFileSync('contacts.json', JSON.stringify(person));


const data = fs.readFileSync("contacts.json");
const p = JSON.parse(data.toString());
console.log(p);
console.log(typeof p);


const command = process.argv[2];
// if (command === "add") {
//     console.log("adding...");
// } else {
//     console.log("command not valid");
// }

// switch (command) {
//     case 'add':
//         console.log("adding....");
//         break;
//     case 'remove':
//         console.log("removing...");
//         break;
//     default:
//         console.log("command not valid");
//         break;
// }