import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/nothing.jpg";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
          params: {
            api_key: "9a2a09cb4cf2237fd864156a40c222cb",
            query: searchQuery,
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <header className="Header fx">
      <div className="cont">
        <div className="top dfx alg-cr jst-sb">
          <figure className="logo">
            <Link to="/">
              <img
                src={Logo}
                alt="FiretipsEdu"
                width="100%"
                height="100%"
                style={{
                  height: "2.2rem",
                  width: "auto",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                }}
              />
            </Link>
          </figure>
          <span className="MenuBtn aa-tgl"></span>
          <span className="MenuBtnClose aa-tgl"></span>
          <div className="Rght BgA dfxc alg-cr fg1">
            <div className="Search">
              <form onSubmit={handleSearch}>
                <span className="Form-Icon">
                  <input
                    name="s"
                    type="search"
                    placeholder="Search..."
                    autoComplete="off"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit">
                    <i className="fa-search"></i>
                  </button>
                </span>
              </form>
            </div>
            <nav className="Menu fg1">
              <ul>
                <li className="AAIco-home menu-item menu-item-type-custom menu-item-object-custom menu-item-1952">
                  <Link to="/home"> Home</Link>
                </li>
                <li className="AAIco-trending_up menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1954">
                  <a href="#">Movies</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1990">
                      <Link to="/movies/featured">Featured</Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1991">
                      <Link to="/movies/popular">Popular Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1992">
                      <Link to="/movies/top_rated">Top Rated Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1993">
                      <Link to="/movies/upcoming">Upcoming Movies</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-10070">
                  <a href="#">TV series</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42306">
                      <Link to="/tv-series/popular">Popular TV Series</Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42305">
                      <Link to="/tv-series/airing_today">
                        Airing Today TV Shows
                      </Link>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42303">
                      <Link to="/tv-series/top_rated">Top Rated TV Shows</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1953">
                  <a href="#">Genres</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-28">
                      <Link to="/genre/movies/28">Action Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-12">
                      <Link to="/genre/movies/12">Adventure Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-16">
                      <Link to="/genre/movies/16">Animation Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-35">
                      <Link to="/genre/movies/35">Comedy Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-80">
                      <Link to="/genre/movies/80">Crime Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-99">
                      <Link to="/genre/movies/99">Documentary Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-18">
                      <Link to="/genre/movies/18">Drama Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10751">
                      <Link to="/genre/movies/10751">Family Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-14">
                      <Link to="/genre/movies/14">Fantasy Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-36">
                      <Link to="/genre/movies/36">History Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-27">
                      <Link to="/genre/movies/27">Horror Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10402">
                      <Link to="/genre/movies/10402">Music Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9648">
                      <Link to="/genre/movies/9648">Mystery Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10749">
                      <Link to="/genre/movies/10749">Romance Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-878">
                      <Link to="/genre/movies/878">Science Fiction Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10770">
                      <Link to="/genre/movies/10770">TV Movie</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-53">
                      <Link to="/genre/movies/53">Thriller Movies</Link>
                    </li>
                    <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-10752">
                      <Link to="/genre/movies/10752">War Movies</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1994">
                  <Link to="/movies/anime">Anime Movies</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
