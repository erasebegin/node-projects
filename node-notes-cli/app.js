const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Add a note",
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
  handler (argv) {
    notes.addNote(argv.title,argv.body)
  }
});

yargs.command({
  command:"remove",
  describe:"Remove a note",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "Note title"
    }
  },
  handler (argv) {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: "list",
  describe: "List all notes",
  handler () {
    notes.listNotes()
  }
})

yargs.command({
  command: "read",
  describe: "Read the specified note",
  builder: {
    title: {
      type: "string",
      demandOption: true,
      describe: "Note title"
    }
  },
  handler (argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse();
