import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Jenkins_new from './components/jenkins_execution/Jenkins_new';
import { Route, Routes } from 'react-router-dom';
import Anf from './components/jenkins_execution/anf/Anf';
import Gcp from './components/jenkins_execution/gcp/Gcp';
import Onprem from './components/jenkins_execution/onprem/Onprem';

function App() {
  return (
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jenkins_new/" element={<Jenkins_new />} >
         <Route path="anf" element={<Anf />} />
         <Route path="gcp" element={<Gcp />} />
         <Route path="onprem" element={<Onprem />} />
        </Route>
      </Routes> 
  );
}

export default App;
