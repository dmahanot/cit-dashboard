import './App.css';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Jenkins_new from './components/jenkins_execution/Jenkins_new';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <Login /> */}
      
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jenkins_new" element={<Jenkins_new />} />
      </Routes>
    </>
  )
}

export default App;
