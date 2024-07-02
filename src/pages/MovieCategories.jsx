import React, { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import "../assets/css/styles.css";
import axios from "axios";
import "../assets/css/moviecategories.css";
import Aside from "../components/Aside.jsx";
import { Link } from "react-router-dom";

function MovieCategories({ handleSetPage, movies, title }) {
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setFeaturedMovies(movies);
  }, [page, movies]);

  const handleNextPage = () => {
    setPage(page + 1);
    handleSetPage(page);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      handleSetPage(page);
    }
  };

  return (
    <div className="bg-dark text-light">
      <div className="aa-wp">
        <div className="bd">
          <Navbar />
          <div className="TpRwCont cont">
            <main className="widget-area">
              <section>
                <br />
                <div className="Top">
                  <h1>{title} Movies</h1>
                </div>
                <ul className="MovieList Rows AX A06 B04 C03 E20">
                  {featuredMovies.map((movie) => (
                    <MovieContainer key={movie.id} movie={movie} />
                  ))}
                </ul>

                <div style={{ marginTop: "20px" }}></div>
                <nav className="navigation pagination">
                  <div className="nav-links">
                    <a className="prev page-numbers" onClick={handlePrevPage}>
                      <i className="fa-arrow-left"></i>
                    </a>
                    <a href="#" className="page-link current">
                      {page}
                    </a>
                    <a className="page-link" onClick={handleNextPage}>
                      {page + 1}
                    </a>
                    {/* Add more page links as needed */}
                    <a className="next page-numbers" onClick={handleNextPage}>
                      <i className="fa-arrow-right"></i>
                    </a>
                  </div>
                </nav>
              </section>
            </main>

            <Aside />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MovieCategories;

const MovieContainer = ({ movie }) => {
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = movie;
  // Assuming dateStr contains the date string "2024-04-19"
  const dateStr = release_date;

  // Create a new Date object with the date string
  const date = new Date(dateStr);

  // Get the year from the date object
  const year = date.getFullYear();
  return (
    <li className="xxx TPostMv">
      <div className="TPost C post-823464 post type-post status-publish format-standard has-post-thumbnail hentry">
        <Link to={`/movies/watch/${title}`} state={{ movie: movie }}>
          <div className="Image">
            <span className="Year">{year}</span>
            <figure className="Objf TpMvPlay AAIco-play_arrow">
              <img
                width="160"
                height="242"
                src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                data-src={`https://image.tmdb.org/t/p/w185${poster_path}`}
                className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                alt={original_title}
              />
            </figure>
          </div>
          <h2 className="Title">{original_title}</h2>
        </Link>

        <div className="TPMvCn anmt">
          <div className="Title">{original_title}</div>
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
            data-src={`https://image.tmdb.org/t/p/w185${poster_path}`}
            className="lazy attachment-thumbnail size-thumbnail wp-post-image bg"
            alt={original_title}
            src={`https://image.tmdb.org/t/p/w185${poster_path}`}
          />
        </div>
      </div>
    </li>
  );
};
