import React from "react";

function Slider() {
  // Define carousel items as an array
  const CarouselItems = [
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
      title: "Kung Fu Panda 4",
      genre: "Movie",
      vote: "7.151",
      date: "2024",
      quality: "HD",
      description:
        "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will...",
      link: "/movies/kung-fu-panda-4-M1011985s/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg",
      title: "Breathe",
      genre: "Movie",
      vote: "5.25",
      date: "2024",
      quality: "HD",
      description:
        "Air-supply is scarce in the near future, forcing a mother and daughter to fight for survival when two strangers arrive desperate for an oxygenated...",
      link: "/movies/breathe-M720321s/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/cIztAxDn3H8JylRaJwiHHpkGe53.jpg",
      title: "Woody Woodpecker Goes to Camp",
      genre: "Movie",
      vote: "7.279",
      date: "2024",
      quality: "HD",
      description:
        "After getting kicked out of the forest, Woody thinks he's found a forever home at Camp Woo Hoo — until an inspector threatens to shut down the...",
      link: "/movies/woody-woodpecker-goes-to-camp-M1239146s/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/dasgPx3OgkxHSQyncKlApfZkpi2.jpg",
      title: "Match of the Day",
      genre: "TV Serie",
      vote: "7.3",
      date: "1964",
      quality: "HD",
      description:
        "BBC's football highlights and analysis. 'The longest-running football television programme in the world' as recognised by Guinness World Records in...",
      link: "/shows/224/match-of-the-day/",
    },
    {
      imageUrl:
        "https://i0.wp.com/www.themoviedb.org/t/p/w780/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg/",
      title: "Dune: Part Two",
      genre: "Movie",
      vote: "8.286",
      date: "2024",
      quality: "HD",
      description:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed...",
      link: "/movies/dune-part-two-M693134s/",
    },
    // Add more items as needed
  ];

  return (
    <>
      <div className="MovieListSld owl-carousel owl-theme owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(-7636px, 0px, 0px)",
              transition: "all 0.25s ease 0s",
              width: "22908px",
            }}
          >
            {CarouselItems.map((item, index) => (
              <div className="owl-item active" style={{ width: "1909px" }}>
                <div className="TPostMv item" key={index}>
                  <div className="TPost D">
                    <a href={item.link}>
                      <div className="Image">
                        <figure className="Objf">
                          <img
                            id={"cpt" + index}
                            className="lazy"
                            src={item.imageUrl}
                            data-src={item.imageUrl}
                            alt={item.title}
                          />
                        </figure>
                      </div>
                    </a>
                    <div className="TPMvCn">
                      <a href={item.link}>
                        <div className="Title">
                          {item.title}{" "}
                          <span className="TpTv BgA">{item.genre}</span>
                        </div>
                      </a>
                      <p className="Info">
                        <span className="Vote">{item.vote}</span>
                        <span className="Date">{item.date}</span>
                        <span className="Qlty">{item.quality}</span>
                      </p>
                      <p>{item.description}</p>
                      <a href={item.link} className="Button TPlay fa-play">
                        Watch Movie
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/*   <div className="owl-item cloned" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg"
                          alt="Kung Fu Panda 4"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/kung-fu-panda-4-M1011985s/">
                      <div className="Title">
                        Kung Fu Panda 4 <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">7.151</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Po is gearing up to become the spiritual leader of his
                      Valley of Peace, but also needs someone to take his place
                      as Dragon Warrior. As such, he will...
                    </p>
                    <a
                      href="/movies/kung-fu-panda-4-M1011985s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg"
                          alt="Breathe"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/breathe-M720321s/">
                      <div className="Title">
                        Breathe <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">5.25</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Air-supply is scarce in the near future, forcing a mother
                      and daughter to fight for survival when two strangers
                      arrive desperate for an oxygenated...
                    </p>
                    <a
                      href="/movies/breathe-M720321s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/cIztAxDn3H8JylRaJwiHHpkGe53.jpg"
                          alt="Woody Woodpecker Goes to Camp"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/woody-woodpecker-goes-to-camp-M1239146s/">
                      <div className="Title">
                        Woody Woodpecker Goes to Camp{" "}
                        <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">7.279</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      After getting kicked out of the forest, Woody thinks he's
                      found a forever home at Camp Woo Hoo — until an inspector
                      threatens to shut down the...
                    </p>
                    <a
                      href="/movies/woody-woodpecker-goes-to-camp-M1239146s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/www.themoviedb.org/t/p/w780/dasgPx3OgkxHSQyncKlApfZkpi2.jpg"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/dasgPx3OgkxHSQyncKlApfZkpi2.jpg"
                          alt="Match of the Day"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/shows/224/match-of-the-day/">
                      <div className="Title">
                        Match of the Day{" "}
                        <span className="TpTv BgA">TV SERIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">7.3</span>
                      <span className="Date">1964</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      BBC's football highlights and analysis. "The
                      longest-running football television programme in the
                      world" as recognised by Guinness World Records in...
                    </p>
                    <a
                      href="/shows/224/match-of-the-day/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item active" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/www.themoviedb.org/t/p/w780/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg/"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
                          alt="Dune: Part Two"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/dune-part-two-M693134s/">
                      <div className="Title">
                        Dune: Part Two <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">8.286</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Follow the mythic journey of Paul Atreides as he unites
                      with Chani and the Fremen while on a path of revenge
                      against the conspirators who destroyed...
                    </p>
                    <a
                      href="/movies/dune-part-two-M693134s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/www.themoviedb.org/t/p/w780/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
                          alt="Godzilla x Kong: The New Empire"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/godzilla-x-kong-the-new-empire-M823464s/">
                      <div className="Title">
                        Godzilla x Kong: The New Empire{" "}
                        <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">6.684</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Following their explosive showdown, Godzilla and Kong must
                      reunite against a colossal undiscovered threat hidden
                      within our world, challenging their...
                    </p>
                    <a
                      href="/movies/godzilla-x-kong-the-new-empire-M823464s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/www.themoviedb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg"
                          alt="Kung Fu Panda 4"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/kung-fu-panda-4-M1011985s/">
                      <div className="Title">
                        Kung Fu Panda 4 <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">7.151</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Po is gearing up to become the spiritual leader of his
                      Valley of Peace, but also needs someone to take his place
                      as Dragon Warrior. As such, he will...
                    </p>
                    <a
                      href="/movies/kung-fu-panda-4-M1011985s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/www.themoviedb.org/t/p/w780/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/9wJO4MBzkqgUZemLTGEsgUbYyP6.jpg"
                          alt="Breathe"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/breathe-M720321s/">
                      <div className="Title">
                        Breathe <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">5.25</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Air-supply is scarce in the near future, forcing a mother
                      and daughter to fight for survival when two strangers
                      arrive desperate for an oxygenated...
                    </p>
                    <a
                      href="/movies/breathe-M720321s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/www.themoviedb.org/t/p/w780/cIztAxDn3H8JylRaJwiHHpkGe53.jpg"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/cIztAxDn3H8JylRaJwiHHpkGe53.jpg"
                          alt="Woody Woodpecker Goes to Camp"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/woody-woodpecker-goes-to-camp-M1239146s/">
                      <div className="Title">
                        Woody Woodpecker Goes to Camp{" "}
                        <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">7.279</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      After getting kicked out of the forest, Woody thinks he's
                      found a forever home at Camp Woo Hoo — until an inspector
                      threatens to shut down the...
                    </p>
                    <a
                      href="/movies/woody-woodpecker-goes-to-camp-M1239146s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/www.themoviedb.org/t/p/w780/dasgPx3OgkxHSQyncKlApfZkpi2.jpg"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/dasgPx3OgkxHSQyncKlApfZkpi2.jpg"
                          alt="Match of the Day"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/shows/224/match-of-the-day/">
                      <div className="Title">
                        Match of the Day{" "}
                        <span className="TpTv BgA">TV SERIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">7.3</span>
                      <span className="Date">1964</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      BBC's football highlights and analysis. "The
                      longest-running football television programme in the
                      world" as recognised by Guinness World Records in...
                    </p>
                    <a
                      href="/shows/224/match-of-the-day/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg"
                          alt="Dune: Part Two"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/dune-part-two-M693134s/">
                      <div className="Title">
                        Dune: Part Two <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">8.286</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Follow the mythic journey of Paul Atreides as he unites
                      with Chani and the Fremen while on a path of revenge
                      against the conspirators who destroyed...
                    </p>
                    <a
                      href="/movies/dune-part-two-M693134s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item cloned" style={{ width: "1909px" }}>
              <div className="TPostMv item">
                <div className="TPost D">
                  <a>
                    <div className="Image">
                      <figure className="Objf">
                        <img
                          id="cpt"
                          className="lazy"
                          src="https://i0.wp.com/123moviehub.net/assets/images/loading.gif"
                          data-src="https://i0.wp.com/www.themoviedb.org/t/p/w780/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg"
                          alt="Godzilla x Kong: The New Empire"
                        />
                      </figure>
                    </div>
                  </a>
                  <div className="TPMvCn">
                    <a href="/movies/godzilla-x-kong-the-new-empire-M823464s/">
                      <div className="Title">
                        Godzilla x Kong: The New Empire{" "}
                        <span className="TpTv BgA">MOVIE</span>
                      </div>
                    </a>
                    <p className="Info">
                      <span className="Vote">6.684</span>
                      <span className="Date">2024</span>
                      <span className="Qlty">HD</span>
                    </p>
                    <p>
                      Following their explosive showdown, Godzilla and Kong must
                      reunite against a colossal undiscovered threat hidden
                      within our world, challenging their...
                    </p>
                    <a
                      href="/movies/godzilla-x-kong-the-new-empire-M823464s/"
                      className="Button TPlay fa-play"
                    >
                      Watch Movie
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="owl-nav disabled">
          <button type="button" role="presentation" className="owl-prev">
            <span aria-label="Previous">‹</span>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <span aria-label="Next">›</span>
          </button>
        </div>
        <div className="owl-dots">
          <button role="button" className="owl-dot">
            <span></span>
          </button>
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
          <button role="button" className="owl-dot">
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
