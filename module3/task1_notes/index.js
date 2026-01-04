const yargs = require('yargs/yargs');
const chalk = require('chalk');
const { hideBin } = require('yargs/helpers');
const { addNote, getNotes, deleteNote } = require('./notes.controller');

const argv = yargs(hideBin(process.argv));

argv.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function ({ title }) {
    addNote(title);
    console.log(chalk.bgGreen(`Note ${title} added!`));
  },
});

argv.command({
  command: 'list',
  describe: 'List all notes',
  handler: async function () {
    console.log(chalk.bgGreen('All notes!'));
    const notes = await getNotes();
    notes.forEach((note) => {
      console.log(chalk.blue(`- ${note.id}: ${note.title}`));
    });
  },
});

argv.command({
  command: 'remove',
  describe: 'Remove note by id',
  builder: {
    id: {
      describe: 'Note id',
      demandOption: true,
      type: 'string',
    },
  },
  handler: async function ({ id }) {
    await deleteNote(id);
    console.log(chalk.bgRed('Note deleted!'));
  },
});

argv.parse();
