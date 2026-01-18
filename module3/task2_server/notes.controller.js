const Note = require('./models/Node');
const chalk = require('chalk');

const getNotes = async () => {
  const notes = await Note.find();
  return notes;
};

const addNote = async (title) => {
  await Note.create({ title });

  console.log(chalk.green('Note added:', title));
};

const deleteNote = async (id) => {
  await Note.deleteOne({ _id: id });
  console.log(chalk.red('Note deleted:', id));
};

const editNote = async (id, newTitle) => {
  await Note.updateOne({ _id: id }, { title: newTitle });
  console.log(chalk.yellow('Note edited:', id, 'New title:', newTitle));
};

module.exports = {
  addNote,
  getNotes,
  deleteNote,
  editNote,
};
