const fs = require('fs/promises');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

const getNotes = async () => {
  const notes = await fs.readFile(dbPath, { encoding: 'utf-8' });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
};

const addNote = async (title) => {
  const notes = await getNotes();
  console.log(notes);

  const note = {
    id: Date.now().toString(),
    title,
  };

  notes.push(note);

  await fs.writeFile(dbPath, JSON.stringify(notes));
};

const deleteNote = async (id) => {
  const notes = await getNotes();
  const filteredNotes = notes.filter((note) => note.id !== id);
  fs.writeFile(dbPath, JSON.stringify(filteredNotes));
};

module.exports = {
  addNote,
  getNotes,
  deleteNote,
};
