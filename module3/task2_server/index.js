const PORT = 3000;
const express = require('express');
const chalk = require('chalk');
const { addNote, getNotes } = require('./notes.controller');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'pages');
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
// const server = http.createServer(async (req, res) => {
//   if (req.method === 'GET') {
//     const content = await fs.readFile(path.join(basePath, 'index.html'));
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//     res.end(content);
//   } else if (req.method === 'POST') {
//     const body = [];
//     res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

//     req.on('data', (chunk) => {
//       body.push(Buffer.from(chunk));
//     });

//     req.on('end', async () => {
//       const title = body.toString().split('=')[1].replaceAll('+', ' ');
//       await addNote(title);
//     });

//     res.end('Note added');
//   }
// });

app.listen(PORT, () => {
  console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
});
