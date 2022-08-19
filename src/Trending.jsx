import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import play from "./assets/images/play.png";
import "./Sass/main.css";
import { Pagination } from "@mui/material";
import Header from "./Header";
import Home from "./Home";

function Trending() {
  const [moviedata, setMovies] = useState([]);
  const [page, setPage] = useState();
  const [numberOfPages, setNumberOfPages] = useState(10);
  const [filterData, setFilterData] = useState([]);
  const [active, setActive] = useState(false);

  const baseUrl = "https://api.themoviedb.org/3";
  const apiKEY = `api_key=67011cf113627fe3311316af752fbcc5&page=${page}`;
  const Api_URL =
    baseUrl +
    "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&" +
    apiKEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const getMovie = async () => {
    const response = await fetch(Api_URL);

    const data = await response.json();
    setMovies(data.results);
    setNumberOfPages(data.total_pages);
  };

  //function to call while hovering on the element

  useEffect(() => {
    getMovie();
  }, [page]);

  const handlePageClick = (data) => {
    alert(data.selected);
  };

  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  const searchText = (event) => {
    setFilterData(event.target.value);
  };

  let dataSearched = moviedata.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterData.toString().toLowerCase())
    );
  });

  const lowest = () => {
    const vote = [...moviedata];
    vote.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setMovies(vote);
  };

  const highest = () => {
    const vote = [...moviedata];
    vote.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setMovies(vote);
  };

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <div className="mainCntr">
      <Header mainFunc={searchText} />
      <Home />
      <div className="trendingContainer">
        <div className="trnding">
          <div className="headingContainer">
            <div className="trendingHeading">
              <h1>Trending</h1>
            </div>
            <div className={active ? "active" : null} onClick={toggleClass}>
              <button
                id="filterBtn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                Sort by rating
              </button>
              <div className="rating">
                <button onClick={highest}>High to Low</button>
                <button onClick={lowest}>Low to High</button>
              </div>
            </div>
          </div>
          <div className="cardsContainer">
            {dataSearched.map((data, val) => {
              return (
                <>
                  <Link
                    to={`/indmoviepage/${data.id}`}
                    className="linktag"
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
                            <p>{data.vote_average} / 10</p>
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

          <div className="Paginat">
            <Pagination
              // variant="outlined"
              color="secondary"
              count={numberOfPages}
              onChange={(e) => handleChange(e.target.textContent)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
