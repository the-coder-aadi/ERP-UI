
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/SuperAdmin/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/super-admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App