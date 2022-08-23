import React, { useState } from "react";
import { DynamicStar } from "react-dynamic-star";
import Header from "./Header";
import Home from "./Home";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Search() {
  const [searchData, setSearchData] = useState([]);
  const [queary, setQueary] = useState("");
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const getsSearchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=67011cf113627fe3311316af752fbcc5&language=en-US&query=${queary}&page=${2}&include_adult=false`
    );
    const result = response.data.results;
    console.log(result);
    setSearchData(result);
  };

  useEffect(() => {
    // getsSearchData();
  }, []);

  const queryTextHandler = (event) => {
    const inputData = event.target.value;
    console.log(inputData);
    setQueary(inputData);
  };

  return (
    <div>
      <Header
        queryTextHandler={queryTextHandler}
        getsSearchData={getsSearchData()}
      />

      <div className="trendingContainer">
        <div className="trnding">
          <div className="cardsContainer">
            {searchData.map((data, val) => {
              return (
                <div key={val}>
                  <Link
                    to={`/indmoviepage/${data.id}`}
                    className="linktag"
                    key={val}
                  >
                    <div key={val} className="card">
                      <img
                        key={val}
                        src={imageBaseUrl + data.backdrop_path}
                        alt=""
                      />

                      <div className="cardInfo" key={val}>
                        <div className="leftinfo">
                          <h2 key={val}>{data.original_title}</h2>
                          <div className="ratingContainer">
                            <DynamicStar
                              key={val}
                              rating={data.vote_average / 2}
                              width={15}
                              height={15}
                              totalStars={5}
                              emptyStarColor={"#ffff"}
                              fullStarColor={"#FFBC00"}
                            />
                            {/* <p>{data.vote_average / 2} / 5</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
