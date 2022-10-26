import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin/:id" element={<Detail />} />
    </Routes>
  </Router>
  );
}

export default App;
