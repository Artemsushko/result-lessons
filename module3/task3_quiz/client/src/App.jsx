import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Quiz, Editor } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center py-10 px-4">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden p-6 sm:p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
