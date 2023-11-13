import "../styles/home.css";
import { Link } from "react-router-dom";

//Images
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";
import headPhoneImg from "/assets/shared/desktop/image-headphones.png";
import speakerImg from "/assets/shared/desktop/image-speakers.png";
import earphonesImg from "/assets/shared/desktop/image-earphones.png";

function Home() {
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
            <div className="shop-item-container">
              <img src={headPhoneImg} alt="headphones" className="product-img"/>
              <h3>Headphones</h3>
              <Link>
                Shop{" "}
                <span>
                  <img src={arrowRight} />
                </span>
              </Link>
            </div>
            <div className="shop-item-container">
              <img src={speakerImg} alt="headphones" className="product-img"/>
              <h3>Speakers</h3>
              <Link>
                Shop{" "}
                <span>
                  <img src={arrowRight} />
                </span>
              </Link>
            </div>
            <div className="shop-item-container">
              <img src={earphonesImg} alt="headphones" className="product-img"/>
              <h3>Earphones</h3>
              <Link>
                Shop{" "}
                <span>
                  <img src={arrowRight} />
                </span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
