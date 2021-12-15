const yargs = require('yargs');

yargs.command({
    command: "create",
    aliases: ["c"],
    describe: "[create new contact]",
    builder: {
        fullname: {
            alias: "f",
            describe: "person fullname",
            demandOption: true,
            type: "string",
        },
        phone: {
            alias: "p",
            describe: "person phone nummber",
            demandOption: true,
            type: "string",
        },
        email: {
            alias: "e",
            describe: "person email address",
            demandOption: true,
            type: "string",
        }
    },
    handler({ fullname, phone, email }) {
        console.log(fullname, phone, email);
    }
})

console.log(yargs.argv);