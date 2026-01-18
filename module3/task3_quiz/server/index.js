const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://artemsushko98_db_user:Qwe123@cluster0.rk73qpy.mongodb.net/quiz?appName=Cluster0',
  )
  .then(async () => {
    console.log('✅ MongoDB connected to Atlas');
    await initDB();
  })
  .catch((err) => console.error('❌ DB Error:', err));

const QuestionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  answers: [
    {
      text: { type: String, required: true },
      isCorrect: { type: Boolean, default: false },
    },
  ],
});

const TestSchema = new mongoose.Schema({
  questions: [QuestionSchema],
});

const TestModel = mongoose.model('Test', TestSchema);

const initDB = async () => {
  const count = await TestModel.countDocuments();
  if (count === 0) {
    await TestModel.create({
      questions: [
        {
          text: 'Какого цвета небо?',
          answers: [
            { text: 'Зеленое', isCorrect: false },
            { text: 'Голубое', isCorrect: true },
          ],
        },
      ],
    });
    console.log('🔹 Initial test created');
  }
};

app.get('/api/test', async (req, res) => {
  const test = await TestModel.findOne();
  res.json(test);
});

app.post('/api/test', async (req, res) => {
  try {
    const { questions } = req.body;
    await TestModel.findOneAndUpdate({}, { questions }, { upsert: true });
    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
