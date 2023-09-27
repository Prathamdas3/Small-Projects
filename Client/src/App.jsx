import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './Pages/LandingPage/landingPage';
import TodoPage from './Pages/TodoPage/TodoPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/Todo" element={<TodoPage />} />
        {/* <Route path="/" element={<LandingPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
