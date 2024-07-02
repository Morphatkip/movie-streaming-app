import React, { useEffect, useState } from "react";
import "../assets/css/home.css";
import "../assets/css/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "./Slider";
import Aside from "../components/Aside";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [activeTab, setActiveTab] = useState("latest");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "9a2a09cb4cf2237fd864156a40c222cb",
              sort_by: "popularity.desc",
              page: page,
            },
          }
        );

        // Limit the number of movies to 5
        const trendingMovies = response.data.results;
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
        const favoriteMovies = response.data.results;
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
        const upcomingMovies = response.data.results;
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
    <body className="bg-dark text-light">
      <div className="aa-wp">
        <div className="fx ">
          <Navbar />
        </div>

        <div className="bd">
          <div className="mt-3">
            <Slider />
          </div>
          <section className="category-list-bx cont">
            <div className="container">
              <div className="row">
                <div
                  className="hidden-xs hidden-sm hidden-md visible-lg text-center"
                  style={{ margin: "15px auto" }}
                ></div>
                <div
                  className="hidden-xs hidden-sm visible-md hidden-lg text-center"
                  style={{ margin: "15px auto" }}
                ></div>
                <div
                  className="visible-xs visible-sm hidden-md hidden-lg text-center"
                  style={{ margin: "15px auto" }}
                ></div>
              </div>
            </div>
          </section>
          <div className="TpRwCont cont">
            <main>
              <section className="home-movies">
                <div className="Top">
                  <h2 className="Title">Movies</h2>
                  <div className="btnstp">
                    <a
                      data-tab="tab-1"
                      className={` Button STPb ${
                        activeTab === "latest" ? "Current" : "ho-naranja"
                      }`}
                      onClick={() => handleTabToggle("latest")}
                    >
                      Latest
                    </a>
                    <a
                      data-tab="tab-2"
                      className={` Button STPb ${
                        activeTab === "mostFavorite" ? "Current" : " ho-naranja"
                      }`}
                      onClick={() => handleTabToggle("mostFavorite")}
                    >
                      Popular
                    </a>
                    <a
                      data-tab="tab-3"
                      className={` Button STPb ${
                        activeTab === "upComing" ? "Current" : " ho-naranja"
                      }`}
                      onClick={() => handleTabToggle("upcoming")}
                    >
                      Coming Soon
                    </a>
                  </div>
                </div>
                <div
                  id="tab-1"
                  className={`apt ${activeTab === "latest" ? "" : "hide"}`}
                >
                  <ul className="MovieList Rows AX A06 B04 C03 E20">
                    {trendingMovies.map((movie) => (
                      <MovieContainer movie={movie} />
                    ))}
                  </ul>

                  <a href="/featured-movies/" className="Button loadmore">
                    View more
                  </a>
                </div>
                <div
                  id="tab-2"
                  className={`apt ${
                    activeTab === "mostFavorite" ? "" : "hide"
                  }`}
                >
                  <ul className="MovieList Rows AX A06 B04 C03 E20">
                    {favoriteMovies.map((movie) => (
                      <MovieContainer movie={movie} />
                    ))}
                  </ul>

                  <a href="/popular-movies/" className="Button loadmore">
                    View more
                  </a>
                </div>
                <div
                  id="tab-3"
                  className={`apt ${activeTab === "upcoming" ? "" : "hide"}`}
                >
                  <ul className="MovieList Rows AX A06 B04 C03 E20">
                    {upcomingMovies.map((movie) => (
                      <MovieContainer movie={movie} />
                    ))}
                  </ul>

                  <a href="/upcoming-movies/" className="Button loadmore">
                    View more
                  </a>
                </div>
                <div style={{ marginTop: "20px" }}></div>
              </section>
              <section className="home-series">
                <div className="Top center-flex">
                  <h2 className="Title">TV series</h2>
                  <a
                    href="/popular-tv-series/"
                    className="Button sm"
                    style={{ width: "130px", marginLeft: "15px", flex: "none" }}
                  >
                    View more
                  </a>
                </div>
                <div className="series_listado series owl-carousel owl-theme tvshows-owl owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0s ease 0s",
                        width: "4088px",
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{ width: "292px" }}
                      >
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-224 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/224/match-of-the-day/">
                              <div className="Image">
                                <span className="Year">1964</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/aA25JrHXj8ZPTJYj2iSIueyb34C.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Match of the Day"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Match of the Day</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "292px" }}
                      >
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-2734 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/2734/law-order-special-victims-unit/">
                              <div className="Image">
                                <span className="Year">1999</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/onmSVwYsPMYtO8OjLdjS8FfRNKb.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Law &amp; Order: Special Victims Unit"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">
                                Law &amp; Order: Special Victims Unit
                              </h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "292px" }}
                      >
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-45789 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/45789/sturm-der-liebe/">
                              <div className="Image">
                                <span className="Year">2005</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/9oZjOh3Va3FsiLGouhSogFsBX9G.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Sturm der Liebe"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Sturm der Liebe</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "292px" }}
                      >
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-121 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/121/doctor-who/">
                              <div className="Image">
                                <span className="Year">1963</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/xinqAmYrZ1TEwowcQhgTkZVtVE0.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Doctor Who"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Doctor Who</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-14929 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/14929/heartland/">
                              <div className="Image">
                                <span className="Year">2007</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/uc2gtWczT58BiAUJWFz9P5aZmNF.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Heartland"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Heartland</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-8590 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/8590/plus-belle-la-vie/">
                              <div className="Image">
                                <span className="Year">2004</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/jmU8HlTDn87xmRqXagcL2swDr8I.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Plus belle la vie"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Plus belle la vie</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-65701 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/65701/good-mythical-morning/">
                              <div className="Image">
                                <span className="Year">2012</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/2Fja87aTeuXxTEI1MH2IuHHSsLq.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Good Mythical Morning"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Good Mythical Morning</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-2261 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/2261/the-tonight-show-starring-johnny-carson/">
                              <div className="Image">
                                <span className="Year">1962</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/jJrveQMHvzDvLaFaLiTfZ9y1Cg8.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="The Tonight Show Starring Johnny Carson"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">
                                The Tonight Show Starring Johnny Carson
                              </h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-549 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/549/law-order/">
                              <div className="Image">
                                <span className="Year">1990</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/m9zTQr4TYS98UFSiA1k0mMfECPe.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Law &amp; Order"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Law &amp; Order</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-103108 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/103108/mdr-um-4/">
                              <div className="Image">
                                <span className="Year">2014</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/xoTOnCc50QJBwRZKlIaM92Q8vbh.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="MDR um 4"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">MDR um 4</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-1636 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/1636/top-of-the-pops/">
                              <div className="Image">
                                <span className="Year">1964</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/jjfTTjVYWyD6rGHVbnC44IrsJ7P.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Top of the Pops"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Top of the Pops</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-4349 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/4349/melrose-place/">
                              <div className="Image">
                                <span className="Year">1992</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/kIc03DwT3DPd48lKlbpyPxx3O1S.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Melrose Place"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Melrose Place</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-2190 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/2190/south-park/">
                              <div className="Image">
                                <span className="Year">1997</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/xJnbMTrJ2fl1AXAKx34U4BPvOhs.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="South Park"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">South Park</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "292px" }}>
                        <div className="xxx TPostMv item">
                          <article className="TPost C post-101827 post type-post status-publish format-standard has-post-thumbnail hentry">
                            <a href="/shows/101827/noon-khe/">
                              <div className="Image">
                                <span className="Year">1970</span>
                                <figure className="Objf TpMvPlay AAIco-play_arrow">
                                  <img
                                    width="160"
                                    height="242"
                                    src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                                    data-src="https://i0.wp.com/www.themoviedb.org/t/p/w300/A23hgySNvMnkUY6013C7LJVtFC6.jpg"
                                    className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                                    alt="Noon Khe"
                                  />
                                </figure>
                                <span className="TpTv BgA">Series</span>
                              </div>
                              <h2 className="Title">Noon Khe</h2>
                            </a>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav disabled">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                    >
                      <span aria-label="Previous">‹</span>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                    >
                      <span aria-label="Next">›</span>
                    </button>
                  </div>
                  <div className="owl-dots">
                    <button role="button" className="owl-dot active">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                    <button role="button" className="owl-dot">
                      <span></span>
                    </button>
                  </div>
                </div>
              </section>
            </main>
            <Aside />
          </div>
        </div>
      </div>

      <Footer />
    </body>
  );
}

export default Home;

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
                className="lazy attachment-thumbnail size-thumbnail wp-post-image"
                alt={original_title}
              />
            </figure>
            {/*  data-src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif" */}
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
