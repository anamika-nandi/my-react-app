import { LogIn } from "./pages/LogIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToDo from "./pages/ToDo";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
