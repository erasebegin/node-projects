const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Reading some books",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "Note title"
    },
    body: {
        type: "string",
        demandOption: true,
        describe: "Note body"
    }
  },
  handler: (argv) => {
    notes.addNote(argv.title,argv.body)
  }
});

yargs.parse();
