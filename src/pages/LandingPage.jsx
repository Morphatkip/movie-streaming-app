import React from "react";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function LandingPage() {
  return (
    <body className="slider landing-page">
      <div className="aa-wp">
        <Navbar />
        <br />
        <div className="bd">
          <div className="cont cuevana3io:tv">
            <p
              id="home-logo"
              className="cuevana3io:tv_logo"
              style={{
                marginTop: "140px",
                fontSize: "40px",
                marginBottom: "40px",
              }}
            >
              FiretipsEdu
            </p>
            <div className="search_lg">
              <form>
                <input
                  className="search_lg-input"
                  id="keysss_home"
                  name="s"
                  type="search"
                  placeholder="Please select Movies or TV-Shows..."
                  autocomplete="off"
                />
                <button
                  style={{ backgroundColor: " #00e1ff" }}
                  className="search_lg-btn"
                  type="submit"
                  aria-label="Please select Movies or TV-Shows..."
                >
                  <i className="fa-search"></i>
                </button>
              </form>
              <p></p>
            </div>
          </div>
        </div>
        <br />
        <p style={{ textAlign: "center", margin: "40px" }}>
          Top search: Godzilla Minus One The Rookie The Idea of You All American
          Young Sheldon The Roast of Tom Brady Arcadian Grey's Anatomy X-Men '97
          Law & Order: Special Victims Unit
        </p>
        <p className="cuevana_enter">
          <Link className="cuevana_enter-btn Button" to="/home">
            <i className="fa-arrow-circle-right"></i>&nbsp;Go to Homepage
          </Link>
        </p>

        <div className="s_text">
          <p>
            <strong>1. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>2. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>3. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>4. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>5. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>6. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>7. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>8. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>9. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            <strong>10. Lorem Ipsum</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="cuevana_enter">
        <a className="cuevana_enter-btn Button" href="/home/">
          <i className="fa-arrow-circle-right"></i>&nbsp;Movies Centre, Click
          here
        </a>
      </p>
      <Footer />

      <div
        id="st-el-1"
        className=" st-image-share-buttons st-center  st-inline-share-buttons st-animated st-hidden"
        style={{ position: "absolute" }}
      >
        <div
          className="st-btn st-first  st-remove-label"
          data-network="facebook"
          style={{ display: "inline-block" }}
        >
          <img
            alt="facebook sharing button"
            src="https://platform-cdn.sharethis.com/img/facebook.svg"
          />
        </div>
        <div
          className="st-btn  st-remove-label"
          data-network="twitter"
          style={{ display: "inline-block" }}
        >
          <img
            alt="twitter sharing button"
            src="https://platform-cdn.sharethis.com/img/twitter.svg"
          />
        </div>
        <div
          className="st-btn  st-remove-label"
          data-network="pinterest"
          tyle={{ display: "inline-block" }}
        >
          <img
            alt="pinterest sharing button"
            src="https://platform-cdn.sharethis.com/img/pinterest.svg"
          />
        </div>
        <div
          className="st-btn st-last  st-remove-label"
          data-network="email"
          style={{ display: "none" }}
        >
          <img
            alt="email sharing button"
            src="https://platform-cdn.sharethis.com/img/email.svg"
          />
        </div>
      </div>
      <div
        id="st-3"
        className=" st-sticky-share-buttons st-right st-toggleable st-has-labels st-show-total "
      >
        <div className="st-total ">
          <span className="st-label">91</span>
          <span className="st-shares">Shares</span>
        </div>
        <div
          className="st-btn st-first"
          data-network="facebook"
          style={{ display: "inline-block" }}
        >
          <img
            alt="facebook sharing button"
            src="https://platform-cdn.sharethis.com/img/facebook.svg"
          />
          <span className="st-label">Share</span>
        </div>
        <div
          className="st-btn"
          data-network="twitter"
          style={{ display: "inline-block" }}
        >
          <img
            alt="twitter sharing button"
            src="https://platform-cdn.sharethis.com/img/twitter.svg"
          />
          <span className="st-label">Tweet</span>
        </div>
        <div
          className="st-btn"
          data-network="print"
          style={{ display: "inline-block" }}
        >
          <img
            alt="print sharing button"
            src="https://platform-cdn.sharethis.com/img/print.svg"
          />
          <span className="st-label">Print</span>
        </div>
        <div
          className="st-btn"
          data-network="whatsapp"
          style={{ display: "inline-block" }}
        >
          <img
            alt="whatsapp sharing button"
            src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
          />
          <span className="st-label">Share</span>
        </div>
        <div
          className="st-btn"
          data-network="pinterest"
          style={{ display: "inline-block" }}
        >
          <img
            alt="pinterest sharing button"
            src="https://platform-cdn.sharethis.com/img/pinterest.svg"
          />
          <span className="st-label">Pin</span>
        </div>
        <div
          className="st-btn st-last"
          data-network="tumblr"
          style={{ display: "inline-block" }}
        >
          <img
            alt="tumblr sharing button"
            src="https://platform-cdn.sharethis.com/img/tumblr.svg"
          />
          <span className="st-label">Share</span>
        </div>
        <div className="st-toggle">
          <div className="st-left">
            <img
              alt="arrow_left sharing button"
              src="https://platform-cdn.sharethis.com/img/arrow_left.svg"
            />
          </div>
          <div className="st-right">
            <img
              alt="arrow_right sharing button"
              src="https://platform-cdn.sharethis.com/img/arrow_right.svg"
            />
          </div>
        </div>
      </div>
    </body>
  );
}

export default LandingPage;

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

  const date = new Date(dateStr);
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
