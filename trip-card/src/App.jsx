import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TripCard from './components/TripCard';
import TripDetails from './components/TripDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TripCard />} />
        <Route path="/trips/:id" element={<TripDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
