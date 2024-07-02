import React, { useEffect, useState } from "react";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";

function Stream({ movies }) {
  const location = useLocation();

  const { movie } = location?.state;
  console.log(movie);
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

  const imageUrl = `https://image.tmdb.org/t/p/w780/${movie?.backdrop_path}`;

  return (
    <body data-rsssl="1" class="slider">
      <div id="aa-wp">
        <Navbar />
        <div class="bd" id="top-single" data-id="823464">
          <div class="video cont">
            <ul class="_1EGcQ_0 TPlayerNv tab_language_movie">
              <li class="open_submenu actives">
                <div class="_3CT5n_0 fa-play L6v6v_0">
                  <div class="H_ndV_0 fa fa-chevron-down"></div>
                  <div class="_1R6bW_0">
                    <span>
                      Watch Movie<span>Quality: 4K-HD</span>
                    </span>
                  </div>
                </div>
              </li>
              <li class="downloadopt">
                <div class="_3CT5n_0 L6v6v_0 fa-cloud-download-alt aa-mdl">
                  <div class="_1R6bW_0">
                    <a
                      rel="nofollow"
                      href="/register?movie=Godzilla x Kong: The New Empire"
                      style={{ color: "#fff" }}
                    >
                      <span>
                        Download <span>Quality: 4K-HD</span>
                      </span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div class="BgA">
              {/*  <style type="text/css">.vidcop div{width:100%;transition:.9s ease-in-out}.vidcop:hover div{transform:scale(1.1)}</style> */}
              <a
                class="vidcop"
                href="/movies/godzilla-x-kong-the-new-empire-M823464s/watching/#video-player"
                style={{
                  width: "100%",
                  display: "block",
                  position: "relative",
                  cursor: "pointer",
                  maxHeight: "360px",
                  height: "100%",
                  overflow: "hidden",
                  paddingBottom: "56.25%",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    bottom: "-100%",
                    display: "block",
                    left: "0",
                    margin: "auto",
                    maxWidth: "100%",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    right: "0",
                    top: "-100%",
                    backgroundImage: `url(${imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      boxShadow: "0px 0px 0px 5px rgba(0, 0, 0, 0.5)",
                      position: "absolute",
                      border: "4px solid #fff",
                      borderRadius: "50%",
                      left: "50%",
                      top: "50%",
                      marginLeft: "-36px",
                      marginTop: "-36px",
                      height: "80px",
                      width: "80px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      class="triangle"
                      style={{
                        borderStyle: "solid",
                        height: 0,
                        width: 0,
                        borderColor:
                          "rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #fff",
                        borderWidth: "16px 0 16px 24px",
                        marginLeft: "6px",
                      }}
                    ></div>
                  </div>
                </div>
                <span style={{ fontSize: "0px" }}>Watch now</span>
              </a>
            </div>
          </div>

          <div class="backdrop">
            <article class="TPost movtv-info cont">
              <div class="Image">
                <figure>
                  <img
                    src={imageUrl}
                    data-src={imageUrl}
                    alt={title}
                    class="lazy"
                  />
                </figure>
                <div class="addlist">
                  <button
                    type="button"
                    class="Button aa-mdl"
                    data-mdl="mdl-login"
                  >
                    <i class="fa-plus-square"></i>Add like...{" "}
                    <i class="fa-chevron-down ddw"></i>
                  </button>
                </div>
              </div>
              <header>
                <h1 class="Title">
                  <a>{title}</a>
                </h1>
                <h2 class="SubTitle">{title}</h2>
              </header>
              <footer>
                <div class="VotesCn">
                  <div class="Prct">
                    <div
                      id="TPVotes"
                      data-percent="64"
                      class="percircle animate gt50"
                    >
                      <span>64</span>
                      <div class="slice">
                        <div
                          class="bar"
                          style={{ transform: "rotate(230.4deg)" }}
                        ></div>
                        <div class="fill"></div>
                      </div>
                      <span>64</span>
                      <div class="slice">
                        <div
                          class="bar"
                          style={{ transform: "rotate(230.4deg)" }}
                        ></div>
                        <div class="fill"></div>
                      </div>
                    </div>
                  </div>
                  <span class="post-ratings">
                    <i
                      class="fa fa-star"
                      style={{
                        cursor: "pointer",
                        border: "0px",
                        fontSize: "12px",
                        color: "#EDB709",
                      }}
                    ></i>
                    <i
                      class="fa fa-star"
                      style={{
                        cursor: "pointer",
                        border: "0px",
                        fontSize: "12px",
                        color: "#EDB709",
                      }}
                    ></i>
                    <i
                      class="fa fa-star-half-alt"
                      style={{
                        cursor: "pointer",
                        border: "0px",
                        fontSize: "12px",
                        color: "#EDB709",
                      }}
                    ></i>
                    <i
                      class="fa fa-star"
                      style={{
                        cursor: "pointer",
                        border: "0px",
                        fontSize: "12px",
                      }}
                    ></i>
                    <i
                      class="fa fa-star"
                      style={{
                        cursor: "pointer",
                        border: "0px",
                        fontSize: "12px",
                      }}
                    ></i>
                    <br />
                    (6.4 from 924 users)
                  </span>
                </div>
                <p class="meta">
                  <span>1h 55m</span>
                  <span>
                    <a
                      href="/year/2024/"
                      style={{ color: "#8DA0BC" }}
                      onmouseover="this.style.color='#007AFF';"
                      onmouseout="this.style.color='#8DA0BC';"
                    >
                      {year}
                    </a>
                  </span>
                  <span class="Qlty">HD</span>
                </p>
                <ul class="ListPOpt">
                  <li class="fa-share-alt"></li>
                  <li>
                    <a
                      rel="nofollow"
                      onclick="window.open ('https://www.facebook.com/sharer.php?u=https://123movieshub.page/movies/godzilla-x-kong-the-new-empire-M823464s/', 'Facebook', 'toolbar=0, status=0, width=650, height=450');"
                      href="javascript: void(0);"
                      title="Facebook"
                      class="Fcb fa-facebook-f fab"
                    ></a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      onclick="window.open ('https://twitter.com/intent/tweet?original_referer=https://123movieshub.page/movies/godzilla-x-kong-the-new-empire-M823464s/&amp;text=Godzilla x Kong: The New Empire&amp;tw_p=tweetbutton&amp;url=https://123movieshub.page/movies/godzilla-x-kong-the-new-empire-M823464s/', 'Twitter', 'toolbar=0, status=0, width=650, height=450');"
                      href="javascript: void(0);"
                      title="Twitter"
                      class="Twt fa-twitter fab"
                    ></a>
                  </li>
                </ul>
              </footer>
              <div class="Description">
                <p style={{ color: "#cccccc", fontStyle: "italic" }}>
                  Watch
                  <strong>{title} online is free on this site</strong>{" "}
                  {overview}
                </p>

                <p></p>
              </div>
              <div class="MvTbCn on anmt" id="MvTb-Info">
                <ul class="InfoList">
                  <li class="AAIco-adjust">
                    <strong>Genre:</strong>{" "}
                    <a href="https://123movieshub.page/genre/action/">
                      {genre_ids}
                    </a>
                    {/*  ,&nbsp;{" "}
                    <a href="https://123movieshub.page/genre/science-fiction/">
                      Science Fiction
                    </a>
                    ,&nbsp;
                    <a href="https://123movieshub.page/genre/adventure/">
                      Adventure
                    </a> */}
                  </li>
                  <li class="AAIco-adjust">
                    <strong>Country:</strong>
                    <a href="/country/us/">Country</a>
                  </li>
                  <li class="AAIco-adjust">
                    <strong>Director:</strong>
                    <span class="color-w">Adam Wingard</span>
                  </li>
                  <li class="AAIco-adjust load-actor">
                    <strong>Cast:</strong>{" "}
                    <a class="tt-at" href="/actor/15556/rebecca-hall/">
                      Rebecca Hall,
                    </a>
                    &nbsp;
                    <a class="tt-at" href="/actor/226366/brian-tyree-henry/">
                      Brian Tyree Henry,
                    </a>
                    &nbsp;
                    <a class="tt-at" href="/actor/221018/dan-stevens/">
                      Dan Stevens,
                    </a>
                    &nbsp;
                    <a class="tt-at" href="/actor/2948491/kaylee-hottle/">
                      Kaylee Hottle,
                    </a>
                    &nbsp;
                    <a
                      class="tt-at"
                      href="/actor/60416/alex-ferns/"
                      style={{ display: "none" }}
                    >
                      Alex Ferns,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/123701/fala-chen/"
                      style={{ display: "none" }}
                    >
                      Fala Chen,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/15298/rachel-house/"
                      style={{ display: "none" }}
                    >
                      Rachel House,
                    </a>
                    &nbsp;
                    <a
                      class="tt-at"
                      href="/actor/2896645/ron-smyck/"
                      style={{ display: "none" }}
                    >
                      Ron Smyck,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/1984017/chantelle-jamieson/"
                      style={{ display: "none" }}
                    >
                      Chantelle Jamieson,
                    </a>
                    &nbsp;
                    <a
                      class="tt-at"
                      href="/actor/2096500/greg-hatton/"
                      style={{ display: "none" }}
                    >
                      Greg Hatton,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/61782/kevin-copeland/"
                      style={{ display: "none" }}
                    >
                      Kevin Copeland,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/4623438/tess-dobre/"
                      style={{ display: "none" }}
                    >
                      Tess Dobre,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/1850005/tim-carroll/"
                      style={{ display: "none" }}
                    >
                      Tim Carroll,
                    </a>
                    &nbsp;
                    <a
                      class="tt-at"
                      href="/actor/930817/anthony-brandon-wong/"
                      style={{ display: "none" }}
                    >
                      Anthony Brandon Wong,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/1634440/sophia-emberson-bain/"
                      style={{ display: "none" }}
                    >
                      Sophia Emberson-Bain,
                    </a>
                    &nbsp;
                    <a
                      class="tt-at"
                      href="/actor/3366146/chika-ikogwe/"
                      style={{ display: "none" }}
                    >
                      Chika Ikogwe,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/1202032/vincent-b-gorce/"
                      style={{ display: "none" }}
                    >
                      Vincent B. Gorce,
                    </a>
                    &nbsp;
                    <a
                      class="tt-at"
                      href="/actor/4589985/yeye-zhou/"
                      style={{ display: "none" }}
                    >
                      Yeye Zhou,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/4636543/jamaliah-othman/"
                      style={{ display: "none" }}
                    >
                      Jamaliah Othman,
                    </a>
                    &nbsp;
                    <a
                      class="tt-at"
                      href="/actor/4636546/nick-lawler/"
                      style={{ display: "none" }}
                    >
                      Nick Lawler,
                    </a>
                    &nbsp;{" "}
                    <a
                      class="tt-at"
                      href="/actor/4193195/jordy-campbell/"
                      style={{ display: "none" }}
                    >
                      Jordy Campbell,
                    </a>
                  </li>
                  <p class="tac">
                    <button class="Button normal btn-view abt">
                      View more
                    </button>
                  </p>
                </ul>
              </div>
            </article>
            <div class="Image">
              <figure class="Objf">
                <img
                  src="https://i0.wp.com/www.themoviedb.org/t/p/w780/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
                  class="lazy"
                  data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
                  alt="Godzilla x Kong: The New Empire (2024)"
                />
              </figure>
            </div>
          </div>
          <div class="TpRwCont cont">
            <main>
              {/* <style>.tag{display:inline-block;border-radius:2px;padding:.2em .5em .3em;background:#232323;color:#cccccc;font-weight:500;margin:.25em .1em}.tag-lg{border-radius:4px}</style>
               */}

              {/* <style>.mobileShows{display:none}.mobileHiden{display:inline}@media only screen and (min-device-width :320px) and (max-device-width :480px){.mobileShows{display:inline}.mobileHiden{display:none}}</style>
              
               */}

              <center>
                <div class="mobileShows">
                  {/*  <script async="" src="https://count-server.sharethis.com/v2.0/get_counts?cb=window.__sharethis__.cb&amp;url=https%3A%2F%2F123movieshub.page%2Fmovies%2Fgodzilla-x-kong-the-new-empire-M823464s%2F"></script>
              <script async="" src="https://buttons-config.sharethis.com/js/6528045f6cbe720012c5e161.js">
              </script>
              <script type="text/javascript">atOptions = {	'key' : '235dd0298888c87008314ff6dbd03aee',	'format' : 'iframe',	'height' : 50,	'width' : 320,	'params' : {}	};</script>
 */}
                  <iframe
                    allowtransparency="true"
                    scrolling="no"
                    frameborder="0"
                    framespacing="0"
                    width="320"
                    height="50"
                    src="about:blank"
                  ></iframe>

                  {/*  <script type="text/javascript" src="//weaversprinkle.com/235dd0298888c87008314ff6dbd03aee/invoke.js" class="atScript235dd0298888c87008314ff6dbd03aee_0">
              </script>  */}
                </div>
                <div class="mobileHiden">
                  {/*  <script type="text/javascript">atOptions = {	'key' : 'dc3ce9ab1f50e451b5babc5a56482757',	'format' : 'iframe',	'height' : 90,	'width' : 728,	'params' : {}	};
              </script>
               */}

                  <iframe
                    allowtransparency="true"
                    scrolling="no"
                    frameborder="0"
                    framespacing="0"
                    width="728"
                    height="90"
                    src="about:blank"
                  ></iframe>
                  <script
                    type="text/javascript"
                    src="//weaversprinkle.com/dc3ce9ab1f50e451b5babc5a56482757/invoke.js"
                    class="atScriptdc3ce9ab1f50e451b5babc5a56482757_0"
                  ></script>
                </div>
              </center>
              <br />
              <section>
                <div class="Top">
                  <h3
                    style={{
                      fontSize: "2rem",
                      fontWeight: "700",
                      lineHeight: "3.5rem",
                      display: "inline-block",
                      verticalAlign: "top",
                      marginBottom: "0",
                      marginRight: "1.5rem",
                      color: "#fff",
                      letterSpacing: "-1px",
                    }}
                  >
                    Related Movies
                  </h3>
                </div>

                <ul class="MovieList Rows AX A06 B04 C03 E20">
                  {movies?.map((movie) => (
                    <MovieContainer movie={movie} />
                  ))}
                </ul>
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

export default Stream;

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
