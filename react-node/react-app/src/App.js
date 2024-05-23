import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Update } from "./pages/Update";
import { AllProfiles } from "./pages/AllProfiles";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="reg" element={<Register />} />
        <Route path="update" element={<Update />} />
        <Route path="profiles" element={<AllProfiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
