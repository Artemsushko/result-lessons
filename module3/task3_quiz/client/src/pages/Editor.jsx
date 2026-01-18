import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Editor = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/test')
      .then((res) => setQuestions(res.data.questions));
  }, []);

  const save = () => {
    if (questions.some((q) => !q.text || !q.answers.some((a) => a.isCorrect))) {
      return alert(
        'Проверьте заполнение (текст вопроса + хотя бы 1 верный ответ)',
      );
    }
    axios
      .post('http://localhost:5000/api/test', { questions })
      .then(() => {
        alert('Сохранено!');
        navigate('/');
      })
      .catch(() => alert('Ошибка'));
  };

  const updateQ = (idx, field, val) => {
    const n = [...questions];
    n[idx][field] = val;
    setQuestions(n);
  };

  const updateA = (qIdx, aIdx, field, val) => {
    const n = [...questions];
    if (field === 'isCorrect') {
      n[qIdx].answers.forEach((a) => (a.isCorrect = false));
    }
    n[qIdx].answers[aIdx][field] = val;
    setQuestions(n);
  };

  const addQ = () =>
    setQuestions([
      ...questions,
      { text: 'Новый вопрос', answers: [{ text: 'Ответ 1', isCorrect: true }] },
    ]);
  const delQ = (i) =>
    questions.length > 1 &&
    setQuestions(questions.filter((_, idx) => idx !== i));
  const addA = (i) => {
    const n = [...questions];
    n[i].answers.push({ text: 'Ответ', isCorrect: false });
    setQuestions(n);
  };
  const delA = (qI, aI) => {
    const n = [...questions];
    if (n[qI].answers.length > 1) {
      n[qI].answers.splice(aI, 1);
      setQuestions(n);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Редактор</h2>
        <div className="space-x-2">
          <button
            onClick={() => navigate('/')}
            className="text-slate-500 hover:text-slate-800 px-3"
          >
            Отмена
          </button>
          <button
            onClick={save}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
          >
            Сохранить
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {questions.map((q, qIdx) => (
          <div
            key={qIdx}
            className="bg-slate-50 p-6 rounded-xl border border-slate-200 relative group"
          >
            <button
              onClick={() => delQ(qIdx)}
              className="absolute top-4 right-4 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition"
              title="Удалить вопрос"
            >
              🗑
            </button>

            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
              Вопрос {qIdx + 1}
            </label>
            <input
              className="w-full p-2 border border-slate-300 rounded mb-4 focus:outline-none focus:border-indigo-500"
              value={q.text}
              onChange={(e) => updateQ(qIdx, 'text', e.target.value)}
            />

            <div className="space-y-2 pl-4 border-l-2 border-slate-200">
              {q.answers.map((ans, aIdx) => (
                <div key={aIdx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q-${qIdx}`}
                    checked={ans.isCorrect}
                    onChange={() => updateA(qIdx, aIdx, 'isCorrect', true)}
                    className="w-4 h-4 text-indigo-600 cursor-pointer"
                  />
                  <input
                    className={`flex-1 p-1 px-2 border rounded text-sm ${
                      ans.isCorrect
                        ? 'border-green-400 bg-green-50'
                        : 'border-slate-300'
                    }`}
                    value={ans.text}
                    onChange={(e) =>
                      updateA(qIdx, aIdx, 'text', e.target.value)
                    }
                  />
                  <button
                    onClick={() => delA(qIdx, aIdx)}
                    className="text-slate-400 hover:text-red-500 px-1"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                onClick={() => addA(qIdx)}
                className="text-xs text-indigo-600 hover:underline mt-2"
              >
                + добавить вариант
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addQ}
        className="w-full mt-6 py-4 border-2 border-dashed border-slate-300 text-slate-500 rounded-xl hover:border-indigo-400 hover:text-indigo-600 transition"
      >
        + Добавить вопрос
      </button>
    </div>
  );
};
