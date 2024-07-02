import React, { useContext } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "../assets/css/styles.css";
import "../assets/css/moviecategories.css";
import Aside from "../components/Aside.jsx";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <div>
      <div className="aa-wp">
        <div className="bd">
          <Navbar />
          <div className="TpRwCont cont">
            <main className="widget-area">
              <section>
                <br />
                <div className="Top">
                  <h1>Search Results</h1>
                </div>
                <ul className="MovieList Rows AX A06 B04 C03 E20">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
                      <ResultContainer
                        key={`${item.media_type}-${item.id}`}
                        item={item}
                      />
                    ))
                  ) : (
                    <p>No results found.</p>
                  )}
                </ul>
              </section>
            </main>
            <Aside />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SearchResults;

const ResultContainer = ({ item }) => {
  const {
    media_type,
    title,
    name,
    overview,
    poster_path,
    release_date,
    first_air_date,
    vote_average,
  } = item;

  const displayTitle = title || name;
  const displayDate = release_date || first_air_date;
  const year = new Date(displayDate).getFullYear();
  const linkPath =
    media_type === "movie" ? `/movies/watch/${title}` : `/tv/watch/${name}`;

  return (
    <li className="xxx TPostMv">
      <div className="TPost C post-823464 post type-post status-publish format-standard has-post-thumbnail hentry">
        <Link to={linkPath} state={{ movie: item }}>
          <div className="Image">
            <span className="Year">{year}</span>
            <figure className="Objf TpMvPlay AAIco-play_arrow">
              <img
                width="160"
                height="242"
                src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                alt={displayTitle}
              />
            </figure>
          </div>
          <h2 className="Title">{displayTitle}</h2>
        </Link>
        <div className="TPMvCn anmt">
          <div className="Title">{displayTitle}</div>
          <p className="Info">
            <span className="Vote AAIco-star">{vote_average}</span>
            <span className="Date AAIco-date_range">{year}</span>
            <span className="Qlty">HD</span>
          </p>
          <div className="Description">
            <p>{overview}</p>
          </div>
          <img
            width="160"
            height="242"
            src={`https://image.tmdb.org/t/p/w185${poster_path}`}
            className="bg"
            alt={displayTitle}
          />
        </div>
      </div>
    </li>
  );
};
