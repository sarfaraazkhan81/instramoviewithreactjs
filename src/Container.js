<div className="trendingContainer">
  <div className="trnding">
    <div className="headingContainer">
      <div className="trendingHeading">
        <h1>Trending</h1>
      </div>
      <div className={active ? "active" : null}>
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
          <button>High to Low</button>
          <button>Low to High</button>
        </div>
      </div>
    </div>
    <div className="cardsContainer">
      <div>
        <Link to={`/indmoviepage/$`} className="linktag">
          <div className="card" style={{ border: "2px solid red" }}>
            <img src="/" alt="" />

            <div className="cardInfo">
              <div className="leftinfo">
                <h2>title</h2>
                <div className="ratingContainer">
                  <DynamicStar
                    rating={10 / 2}
                    width={15}
                    height={15}
                    totalStars={5}
                    emptyStarColor={"#ffff"}
                    fullStarColor={"#FFBC00"}
                  />
                </div>
              </div>
              <div className="rightinfo">
                <img src={""} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div>;
