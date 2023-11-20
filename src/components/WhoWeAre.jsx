import bestGearMobile from "/assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "/assets/shared/desktop/image-best-gear.jpg";
import { useMediaQuery } from "react-responsive";

function WhoWeAre() {
  const isMobile = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 989px)",
  });

  return (
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
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default WhoWeAre;
