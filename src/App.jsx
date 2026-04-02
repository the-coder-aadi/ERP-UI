
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/SuperAdmin/Dashboard";
import InstitutionsMng from "./Pages/SuperAdmin/InstitutionsMng";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/super-admin/dashboard" element={<Dashboard />} />
        <Route path="/super-admin/institutions-mng" element={<InstitutionsMng />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App