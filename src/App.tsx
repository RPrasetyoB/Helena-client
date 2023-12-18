import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LandingPage, LoginPage, RegistrationPage, RegisterProfilePage, ProfilePage, DashboardPage, EmailSendPage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/signup' element={<RegistrationPage />} />
          <Route path='/register-profile' element={<RegisterProfilePage />} />
          <Route path='/landing-page' element={<LandingPage />} />
          <Route path='/user-profile' element={<ProfilePage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/reset-password/email-send' element={<EmailSendPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
