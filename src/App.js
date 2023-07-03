import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
// I want to check whether the user is logged in or not and show the appropriate page
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
