const PORT = 3000;
const express = require('express');
const chalk = require('chalk');
const path = require('path');
const mongoose = require('mongoose');
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
  try {
    res.render('index', {
      title: 'Notes app',
      notes: await getNotes(),
      created: false,
      error: false,
    });
  } catch (e) {
    res.render('index', {
      title: 'Notes app',
      notes: [],
      created: false,
      error: true,
    });
  }
});

app.post('/', async (req, res) => {
  try {
    if (!req.body.title) {
      throw new Error('Empty title');
    }

    await addNote(req.body.title);

    res.render('index', {
      title: 'Notes app',
      notes: await getNotes(),
      created: true,
      error: false,
    });
  } catch (e) {
    res.render('index', {
      title: 'Notes app',
      notes: await getNotes(),
      created: false,
      error: true,
    });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await deleteNote(req.params.id);
    res.status(200).send({ message: 'Note deleted successfully' });
  } catch (e) {
    res.status(500).send({ error: 'Failed to delete note' });
    res.render('index', {
      title: 'Notes app',
      notes: await getNotes(),
      created: false,
      error: true,
    });
  }
});

app.put('/:id', async (req, res) => {
  try {
    const { title } = req.body;
    await editNote(req.params.id, title);
    res.status(200).send({ message: 'Note updated successfully' });
  } catch (e) {
    res.status(500).send({ error: 'Failed to edit note' });
    res.render('index', {
      title: 'Notes app',
      notes: await getNotes(),
      created: false,
      error: true,
    });
  }
});

mongoose
  .connect(
    'mongodb+srv://artemsushko98_db_user:Qwe123@cluster0.rk73qpy.mongodb.net/notes?appName=Cluster0',
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
    });
  });
