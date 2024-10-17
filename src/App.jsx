// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './componant/Signup';
import Login from './componant/Login';
import Dashboard from './componant/Dashboard';

function App() {
  return (

    <>
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />

        </Routes>

      </Router>

    
    </>
  );
}

export default App;


