const fs = require('fs/promises');
const path = require('path');

const dbPath = path.join(__dirname, 'db.json');

const saveNotes = async (notes) => {
  await fs.writeFile(dbPath, JSON.stringify(notes));
};

const getNotes = async () => {
  const notes = await fs.readFile(dbPath, { encoding: 'utf-8' });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
};

const addNote = async (title) => {
  const notes = await getNotes();

  const note = {
    id: Date.now().toString(),
    title,
  };

  notes.push(note);

  await saveNotes(notes);
};

const deleteNote = async (id) => {
  const notes = await getNotes();
  const filteredNotes = notes.filter((note) => note.id !== id);
  await saveNotes(filteredNotes);
};

async function editNote(id, newTitle) {
  const notes = await getNotes();
  const index = notes.findIndex((note) => note.id === id);

  if (index !== -1) {
    notes[index].title = newTitle;
    await saveNotes(notes);
  }
}

module.exports = {
  addNote,
  getNotes,
  deleteNote,
  editNote,
};
