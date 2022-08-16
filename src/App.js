import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import IndMoviePage from "./IndMoviePage";
import Trending from "./Trending";
import GetTheVide from "./GetTheVide";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Trending />} />
          <Route path="getthevideo" element={<GetTheVide />} />
          <Route exact path="indmoviepage/:id" element={<IndMoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
