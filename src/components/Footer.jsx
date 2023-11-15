import "../styles/footer.css";
import "../styles/home.css"

import logo from "/assets/shared/desktop/logo.svg";
import facebookIcon from "/assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "/assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "/assets/shared/desktop/icon-twitter.svg";

import bestGearMobile from "/assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "/assets/shared/desktop/image-best-gear.jpg";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 989px)",
  });

  return (
    <>
      <div className="who-we-are-container">
        <img
          src={
            isMobile
              ? bestGearMobile
              : isTablet
              ? bestGearTablet
              : bestGearDesktop
          }
          alt="a person listening to music"
        />

        <div className="our-goal-container">
          <h3>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
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
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
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
    </>
  );
}

export default Footer;
