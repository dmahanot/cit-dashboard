import './App.css';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Jenkins from './components/jenkins_execution/Jenkins';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Login /> */}
      <Navbar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jenkins" element={<Jenkins />} />
      </Routes>
    </>
  )
}

export default App;
