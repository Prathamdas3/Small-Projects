import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './Pages/LandingPage/landingPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
