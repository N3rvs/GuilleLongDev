import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioHome from './pages/PortfolioHome.tsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
      </Routes>
    </Router>
  );
}

export default App;