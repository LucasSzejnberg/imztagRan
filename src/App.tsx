import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import InstagramLogin from './Instagram';
import VerBase from './VerBase.tsx';  // Nuevo componente
import './App.css';

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/login" element={<InstagramLogin />} />
      <Route path="/verbase" element={<VerBase />} />
    </Routes>
    </Router>

  );
}

export default App;
