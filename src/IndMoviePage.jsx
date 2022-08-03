import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Sass/main.css";
import thor from "./assets/images/thor.webp";

import { Link } from "react-router-dom";

function IndMovie() {
  return (
    <div className="container indMovie">
      <div className="movieCard">
        <img src={thor} alt="movie banner" />
        <div className="overLay">
          <div className="movieInfo">
            <Link to={"/"}>
              <KeyboardBackspaceIcon style={{ color: "#ffff" }} />
            </Link>

            <h1>Thor the Love and Thunder</h1>
            <p>Rating: 4/5</p>
            <p>
              Thor embarks on a journey unlike <br /> anything he's ever faced
              -- a quest for inner peace. However, his
            </p>
            <p>
              Release Date:<span>01/02/2022</span>
            </p>
            <p>
              Orignal Language: <span>English</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndMovie;
