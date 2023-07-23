import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
