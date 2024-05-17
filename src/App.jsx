import './App.css';
// import Seller from './Seller';
import Dashboard from './Dashboard/Dashboard';
import ErrorPath from "./Pages/ErrorPath";
import LandingHome from './Pages/LandingHome';
import ContactUs from './Pages/ContactUs';
import RegistrationMain from './Pages/Registration/RegistrationMain';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Routes/Layout';
import Protected from "./Routes/Protected";
import { AuthContextProvider } from './Context/AuthContext';

function App() {

  return (
    // <Seller />
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="*" element={<ErrorPath />} />

          <Route element={<Layout />}>
            <Route exact path="/" element={<LandingHome />} />
            <Route path='/contact' element={<ContactUs />} />
          </Route>

          <Route path='/registration' element={<RegistrationMain />} />

          <Route exact path='/dashboard' element={
            <Protected>
              <Dashboard />
            </Protected>
          } />

        </Routes>
      </Router>
    </AuthContextProvider>
  )
}

export default App
