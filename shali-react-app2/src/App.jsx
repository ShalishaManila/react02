import "./App.css";
import Game from "./components/Game.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ProtectedPages from "./services/ProtectedPages.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* protected pages */}
          <Route path="/" element={<ProtectedPages />}>
            <Route path="/" element={<Game />} />
            <Route path="/game" element={<Game />} />
          </Route>
          <Route path="*" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
