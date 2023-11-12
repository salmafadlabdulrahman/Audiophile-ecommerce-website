import "../styles/home.css";
import heroImg from "/assets/home/mobile/image-hero.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
          <header className="header">
            <div className="header-background-img"></div>
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
    </div>
  );
}

export default Home;
