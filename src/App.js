import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import IndMoviePage from "./IndMoviePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="indmoviepage" element={<IndMoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
