
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App