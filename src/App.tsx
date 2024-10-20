import { Routes, Route } from 'react-router-dom';
import InstagramLogin from './Instagram';
import VerBase from './VerBase.tsx';  // Nuevo componente
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<InstagramLogin />} />
      <Route path="/verbase" element={<VerBase />} />
    </Routes>
  );
}

export default App;
