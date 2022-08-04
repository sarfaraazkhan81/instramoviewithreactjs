import { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Sass/main.css";
import Header from "./Header";

import { Link, useParams } from "react-router-dom";

function IndMovie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const baseUrl = "https://api.themoviedb.org/3";
  const apiKEY = "api_key=67011cf113627fe3311316af752fbcc5";
  const Api_URL = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const getMovie = async () => {
    const response = await fetch(Api_URL);

    const data = await response.json();
    const { results } = data;
    const sameData = results.find((item) => item.id === parseInt(id));
    setMovie(sameData);
  };

  useEffect(() => {
    getMovie(movie);
  }, []);

  return (
    <div className="indmoviesContainer">
      <Header />
      <div className="container indMovie">
        <div className="movieCard">
          <img src={imageBaseUrl + movie.backdrop_path} alt="movie banner" />
          <div className="overLay">
            <div className="movieInfo">
              <Link to={"/"}>
                <KeyboardBackspaceIcon style={{ color: "#ffff" }} />
              </Link>

              <h1>{movie.original_title}</h1>
              <p>Rating: {movie.vote_average}</p>
              <p>{movie.overview}</p>
              <p>
                Release Date:<span id="relsDate">{movie.release_date}</span>
              </p>
              <p>
                Orignal Language:{" "}
                <span id="relsDate">{movie.original_language}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndMovie;
