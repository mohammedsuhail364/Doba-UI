// import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Loginpage from './components/Loginpage'; // Ensure this path is correct
import Home from './components/Home'; // Import the Home component
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignUp/>} />

      </Routes>
    </>
  );
}

export default App;
