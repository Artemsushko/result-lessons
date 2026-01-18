import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    setHistory(data);
  }, []);

  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-extrabold text-indigo-600 tracking-tight">
        Quiz App 0.1
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => navigate('/quiz')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105 shadow-lg"
        >
          🚀 Запустить тест
        </button>
        <button
          onClick={() => navigate('/editor')}
          className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold py-3 px-8 rounded-lg transition"
        >
          ✏️ Редактор
        </button>
      </div>

      <div className="mt-10 text-left">
        <h2 className="text-xl font-semibold text-slate-600 mb-4 border-b pb-2">
          История прохождений
        </h2>
        {history.length === 0 ? (
          <p className="text-slate-400 italic text-center">
            Вы еще не проходили тест
          </p>
        ) : (
          <ul className="space-y-3">
            {history
              .slice()
              .reverse()
              .map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-slate-50 p-3 rounded border border-slate-100"
                >
                  <span className="text-xs text-slate-400">{item.date}</span>
                  <div className="flex gap-4">
                    <span className="text-slate-600">Всего: {item.total}</span>
                    <span className="font-bold text-green-600">
                      Верно: {item.score}
                    </span>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};
