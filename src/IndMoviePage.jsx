import { useState, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./Sass/main.css";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function IndMovie() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const [trailerUrl, setTrailerUrl] = useState("");
  const videotraid = "luImsWaNLAY";
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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playTrailer = (data) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(data?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error, "Temporary Unavailable"));
    }
  };
  return (
    <div className="indmoviesContainer">
      <Header />
      <div
        className="container indMovie"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 10%), rgb(0 0 0 / 10%)), url(${imageBaseUrl}${movie.backdrop_path})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
        }}
      >
        <div className="movieCard">
          {/* <img src={imageBaseUrl + movie.backdrop_path} alt="movie banner" /> */}
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
      {trailerUrl && (
        <YouTube
          videoId={`https://www.youtube.com/watch?v=${trailerUrl}`}
          opts={opts}
        />
      )}
      {/* <ReactPlayer url={`https://www.youtube.com/watch?v=${videotraid}`} /> */}
    </div>
  );
}

export default IndMovie;
