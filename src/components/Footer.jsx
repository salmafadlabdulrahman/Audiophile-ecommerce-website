import "../styles/footer.css";

import logo from "/assets/shared/desktop/logo.svg";
import facebookIcon from "/assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "/assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "/assets/shared/desktop/icon-twitter.svg";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <span className="line"></span>
        <div className="footer-nav-container">
          <img src={logo} className="footer-logo" />

          <ul className="footer-nav">
            <li>home</li>
            <li>headphones</li>
            <li>speakers</li>
            <li>earphones</li>
          </ul>
        </div>

        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="copyrights-container">
          <span className="copyrights">
            Copyright 2021. All Rights Reserved
          </span>

          <div className="icons">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={twitterIcon} alt="twitter icon" />
            <img src={instagramIcon} alt="instagram icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
