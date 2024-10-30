import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage, ImprintPage, PrivacyPage, Dashboard, GetToken, Dashboard1 } from './pages/allpages'
import Testtrack from './pages/components/Testtrack';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/imprint" element={<ImprintPage/>} />
          <Route path="/purpose" element={<PrivacyPage/>} />
          <Route path="/redirect-dashboard" element={<GetToken/>} />
          <Route path="/dashboard/" element={<Dashboard1/>} />
          <Route path="/track/:id" element={<Testtrack/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
