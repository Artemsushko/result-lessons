import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/test')
      .then((res) => setQuestions(res.data.questions))
      .catch((err) => console.error(err));
  }, []);

  const handleSelect = (idx) => {
    setAnswers({ ...answers, [current]: idx });
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
    else finish();
  };

  const finish = () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] !== undefined && q.answers[answers[i]].isCorrect) s++;
    });
    setScore(s);
    setFinished(true);

    const record = {
      date: new Date().toLocaleDateString(),
      total: questions.length,
      score: s,
    };
    const hist = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    localStorage.setItem('quiz_history', JSON.stringify([...hist, record]));
  };

  if (!questions.length)
    return <div className="text-center p-10">Загрузка...</div>;

  if (finished) {
    return (
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-800">Тест завершен!</h2>
        <div className="text-6xl font-black text-indigo-500">
          {score}{' '}
          <span className="text-2xl text-slate-400 font-normal">
            / {questions.length}
          </span>
        </div>
        <div className="flex gap-4 justify-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-slate-200 rounded hover:bg-slate-300"
          >
            На главную
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Еще раз
          </button>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const isSelected = answers[current] !== undefined;

  return (
    <div>
      <div className="mb-4 flex justify-between items-end">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
          Вопрос {current + 1}
        </span>
        <span className="text-xs text-slate-300">{questions.length} всего</span>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-slate-800">{q.text}</h2>

      <div className="space-y-3">
        {q.answers.map((ans, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-between
              ${
                answers[current] === idx
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm'
                  : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50'
              }`}
          >
            {ans.text}
            {answers[current] === idx && (
              <span className="text-indigo-500">✔</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
        <button
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
          className="text-slate-400 hover:text-slate-600 disabled:opacity-30"
        >
          ← Назад
        </button>
        <button
          disabled={!isSelected}
          onClick={handleNext}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {current === questions.length - 1 ? 'Завершить' : 'Далее →'}
        </button>
      </div>
    </div>
  );
};
