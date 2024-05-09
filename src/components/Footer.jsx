import React from "react";

function Footer() {
  return (
    <>
      <footer className="ft">
        <div className="cont dfxb alg-cr">
          <figure className="logo-ft">
            <span
              style={{
                height: "2.4rem",
                width: "auto",
                verticalAlign: "middle",
                maxWidth: "100%",
                content: "url(/logo.png)",
              }}
            ></span>
          </figure>
          <nav className="dfxb jst-sb fg1 alg-cr">
            <ul className="mnft dfx jst-cr">
              <li></li>
            </ul>
            <ul className="smft dfx jst-cr">
              <li>
                <a
                  href="https://www.facebook.com/Soap2day/"
                  className="fa-facebook-f fab"
                >
                  <span style={{ fontSize: "0px" }}>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Soap2day/"
                  className="fa-twitter fab"
                >
                  <span style={{ fontSize: "0px" }}>Twitter</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="copy tac" style={{ fontSize: "1rem", color: "#fff" }}>
          Copyright © 2024 - Movies center
        </p>
        <p
          style={{
            maxWidth: "800px",
            textAlign: "center",
            margin: "0 auto 20px",
            lineHeight: "1.6em",
            fontSize: "1rem",
            color: "#fff",
            opacity: 0.7,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </footer>
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
    </>
  );
}

export default Footer;
