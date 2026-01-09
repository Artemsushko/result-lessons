const PORT = 3000;
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const {
  addNote,
  getNotes,
  deleteNote,
  editNote,
} = require('./notes.controller');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'pages');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.render('index', {
    title: 'Notes app',
    notes: await getNotes(),
    created: false,
  });
});

app.post('/', async (req, res) => {
  req.body.title && (await addNote(req.body.title));
  res.render('index', {
    title: 'Notes app',
    notes: await getNotes(),
    created: true,
  });
});

app.delete('/:id', async (req, res) => {
  try {
    await deleteNote(req.params.id);
    res.status(200).send({ message: 'Note deleted successfully' });
  } catch (e) {
    res.status(500).send({ error: 'Failed to delete note' });
  }
});

app.put('/:id', async (req, res) => {
  try {
    const { title } = req.body;
    await editNote(req.params.id, title);
    res.status(200).send({ message: 'Note updated successfully' });
  } catch (e) {
    res.status(500).send({ error: 'Failed to edit note' });
  }
});

app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
});
