import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Jenkins_new from './components/jenkins_execution/Jenkins_new';
import { Route, Routes, Navigate } from 'react-router-dom';
import Onprem from './components/jenkins_execution/onprem/Onprem';
import Anf_sanity from './components/jenkins_execution/anf/Anf_sanity';
import Anf_crr from './components/jenkins_execution/anf/Anf_crr';
import Login from './components/login/Login';
import Gcp_sanity from './components/jenkins_execution/gcp/Gcp_sanity';
import Gcp_crr from './components/jenkins_execution/gcp/Gcp_crr';

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="jenkins_new/" element={<Jenkins_new />} >
        <Route path="anf_sanity" element={<Anf_sanity />} />
        <Route path="anf_crr" element={<Anf_crr />} />
        <Route path="gcp_sanity" element={<Gcp_sanity />} />
        <Route path="gcp_crr" element={<Gcp_crr />} />
        <Route path="onprem" element={<Onprem />} />
      </Route>
    </Routes >
  );
}

export default App;
