// const { default: chalk } = require('chalk');
const { command } = require('yargs');
const yargs = require('yargs');
// import yargs from 'yargs';
const { addcontacts, listContacts, removeContacts } = require('./contacts');
yargs.scriptName('Contact Manager');
yargs.usage(`$0 ${"<command>"} ${("[args]")}`)

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
        addcontacts(fullname, phone, email);
    }
});

yargs.command({
    command: "list",
    aliases: ["l"],
    // describe: `${chalk.green("[list the save contats]")}`,
    describe: `${"[list the save contats]"}`,
    handler() {
        listContacts();
    }
})

yargs.command({
    command: "remove",
    aliases: ["r"],
    describe: "person removed!",
    builder: {
        fullname: {
            alias: "f",
            describe: "person fullname",
            demandOption: true,
            type: "string"
        }
    },
    handler({ fullname }) {
        removeContacts(fullname);
    }
})

console.log(yargs.argv);