import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import play from "./assets/images/play.png";
import "./Sass/main.css";

function Trending() {
  const [moviedata, setMovies] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3";
  const apiKEY = `api_key=67011cf113627fe3311316af752fbcc5&page=`;
  const Api_URL = baseUrl + "/discover/movie?sort_by=popularity.desc&" + apiKEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const getMovie = async () => {
    const response = await fetch(Api_URL);

    const data = await response.json();
    setMovies(data.results);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="trnding">
      <div className="cardsContainer">
        {moviedata.map((data) => {
          return (
            <>
              <Link
                className="linktag"
                to={`/indmoviepage`}
                // to={`/indmoviepage/${data.id}`}
                key={data.id}
              >
                <div key={data.id} className="card">
                  <img
                    key={data.id}
                    src={imageBaseUrl + data.backdrop_path}
                    alt=""
                  />
                  <div className="cardInfo" key={data.id}>
                    <div className="leftinfo">
                      <h2 key={data.id}>{data.original_title}</h2>
                      <div className="ratingContainer">
                        <StarRateIcon
                          key={data.id}
                          style={{
                            color: "yellow",
                            height: "15px",
                            width: "15px",
                          }}
                        />
                        <p>{data.vote_average} / 5</p>
                      </div>
                    </div>
                    <div className="rightinfo">
                      <img src={play} />
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Trending;
