import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Aside() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [activeTab, setActiveTab] = useState("mostFavorite");

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              sort_by: "popularity.desc",
              page: page, // Include the page parameter
            },
          }
        );

        // Limit the number of movies to 5
        const trendingMovies = response.data.results.slice(0, 5);
        setTrendingMovies(trendingMovies);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, [page]); // Refetch movies when page changes

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              sort_by: "vote_average.desc", // Sort by vote_average in descending order
              page: page, // Include the page parameter
            },
          }
        );

        // Limit the number of movies to 5
        const favoriteMovies = response.data.results.slice(0, 6);
        setFavoriteMovies(favoriteMovies);
      } catch (error) {
        console.error("Error fetching favorite movies:", error);
      }
    };

    fetchFavoriteMovies();
  }, []); // Refetch movies when page changes

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              "primary_release_date.gte": currentDate, // Filter movies with release date greater than or equal to current date
              sort_by: "primary_release_date.asc", // Sort by release date in ascending order
            },
          }
        );

        // Limit the number of movies to 5
        const upcomingMovies = response.data.results.slice(0, 5);
        setUpcomingMovies(upcomingMovies);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, [page]); // Refetch movies when page changes

  const handleTabToggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <aside className="widget-area">
      <br />
      <div id="peli_top_estrenos-2" className="Wdgt peli_top_estrenos">
        <div className="Title widget-title">Trending MOVIES</div>
        <ul className="MovieList top">
          {trendingMovies.map((movie) => (
            <MovieContainer movie={movie} />
          ))}
        </ul>
      </div>
      <div id="peli_movies-2" className="Wdgt peli_movies widget_languages">
        <div className="Title widget-title">Recommended</div>
        <ul className="aa-nv dfx tac" data-tbs="aa-movies">
          <li className="fg1">
            <div
              className={activeTab === "mostFavorite" ? "on" : ""}
              onClick={() => handleTabToggle("mostFavorite")}
            >
              Most Favorite
            </div>
          </li>
          <li className="fg1">
            <div
              className={activeTab === "upcoming" ? "on" : ""}
              onClick={() => handleTabToggle("upcoming")}
            >
              Upcoming Movies
            </div>
          </li>
        </ul>
        <div className="aa-cn" id="aa-movies">
          <div
            id="aa-mov1"
            className={`aa-tb anm-e ${
              activeTab === "mostFavorite" ? "on" : ""
            }`}
          >
            <ul className="MovieList">
              {favoriteMovies.map((movie) => (
                <MovieContainer movie={movie} key={movie.id} />
              ))}
            </ul>
          </div>
          <div
            id="aa-mov2"
            className={`aa-tb anm-e ${activeTab === "upcoming" ? "on" : ""}`}
          >
            <ul className="MovieList">
              {upcomingMovies.map((movie) => (
                <MovieContainer movie={movie} key={movie.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="got-dvr" style={{ marginBottom: "20px" }}></div>
    </aside>
  );
}

export default Aside;

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

  const dateStr = release_date;

  // Create a new Date object with the date string
  const date = new Date(dateStr);

  // Get the year from the date object
  const year = date.getFullYear();
  return (
    <li>
      <div className="TPost A">
        <Link to={`/movies/watch/${title}`} state={{ movie: movie }}>
          <div className="Image">
            <figure className="Objf TpMvPlay AAIco-play_arrow">
              <img
                className="lazy"
                src={`https://image.tmdb.org/t/p/w185${poster_path}?w=100`}
                data-src={`https://image.tmdb.org/t/p/w185${poster_path}?w=100`}
                alt={original_title}
              />
            </figure>
          </div>
          <div className="Title">{original_title}</div>
        </Link>

        <p className="Info">
          {" "}
          <span className="Vote AAIco-star">{vote_average}</span>{" "}
          <span className="Date AAIco-date_range">{year}</span>{" "}
          <span className="Qlty">HD</span>
        </p>
      </div>
    </li>
  );
};
