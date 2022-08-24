import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import IndMoviePage from "./IndMoviePage";
import Trending from "./Trending";
import Login from "./Login/Login";
import ProtectedRoute from "./ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="login" element={<Login />} />

          <Route exact path="indmoviepage/:id" element={<IndMoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
