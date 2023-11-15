import "../styles/home.css";

//Images
import speakerProductImg from "/assets/home/mobile/image-speaker-zx9.png";
import speakerImgMobile from "/assets/home/mobile/image-speaker-zx7.jpg";
import speakerImgTablet from "/assets/home/tablet/image-speaker-zx7.jpg";
import speakerImgDesktop from "/assets/home/desktop/image-speaker-zx7.jpg";
import earphoneImgMobile from "/assets/home/mobile/image-earphones-yx1.jpg";
import earphoneImgTablet from "/assets/home/tablet/image-earphones-yx1.jpg";
import bestGearMobile from "/assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "/assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "/assets/shared/desktop/image-best-gear.jpg"
import { useMediaQuery } from "react-responsive";
import ProductsCategories from "../components/ProductsCategories";

function Home() {
  const isMobile = useMediaQuery({
    query: "(min-width: 100px) and (max-width: 480px)",
  });

  const isTablet = useMediaQuery({query: "(min-width: 481px) and (max-width: 989px)"})

  const isDesktop = useMediaQuery({
    query: "(min-width: 990px)",
  });

  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="home-container">
          <header className="header">
            <div className="header-content-container">
              <h3>New Product</h3>
              <h1>XX99 MARK II HEADPHONES</h1>
              <p>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button>See Product</button>
            </div>
          </header>
        </div>

        <main className="main">
          <div className="main-container">
            <ProductsCategories />

            <div className="thumbnails-container">
              <div className="new-product-container">
                <div className="product-content">
                  <img src={speakerProductImg} alt="speaker Image" />
                  <div className="product-content-details">
                    <h2>
                      ZX9 <br />
                      SPEAKER
                    </h2>
                    <p>
                      Upgrade to premium speakers that are phenomenally built to
                      deliver truly remarkable sound.
                    </p>
                    <button>See Product</button>
                  </div>
                </div>
              </div>

              <div className="new-product-details-container">
                <div className="product-display">
                  <img
                    src={isMobile ? speakerImgMobile : isTablet ? speakerImgTablet : speakerImgDesktop}
                    alt="speaker Image"
                  />
                  <div className="product-display-content">
                    <h2>ZX7 SPEAKER</h2>
                    <button>See Product</button>
                  </div>
                </div>
              </div>

              <div className="new-item-container">
                <div className="new-product-img">
                  <img
                    src={isTablet ? earphoneImgTablet : earphoneImgMobile}
                    alt="earphone Image"
                  />
                </div>

                <div className="new-product-info">
                  <div className="info">
                    <h2>Yx1 earphones</h2>
                    <button>See Product</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="who-we-are-container">
              <img
                src={isMobile ? bestGearMobile : isTablet ? bestGearTablet : bestGearDesktop}
                alt="a person listening to music"
              />

              <div className="our-goal-container">
                <h3>
                  BRINGING YOU THE <span>BEST</span> AUDIO GEAR
                </h3>
                <p>
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;