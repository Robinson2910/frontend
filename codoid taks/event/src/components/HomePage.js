import logo from "../img/logo-home.png";
import homeImg from "../img/home-img.jpg";
import circle from "../img/circle.png";
import "../HomePage.css";
function HomePage() {
  return (
    <div className="home-page">
      <header className="header ">
        <div className="logo-box container-home-page">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-page-grid-box container-home-page">
          <div className="page-description-box">
            <h1
              className="home-page-heading margin-bottom-small
            "
            >
              Elevate your Career with HireNov
            </h1>
            <p className="para margin-bottom-small">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum
            </p>
            <button type="button" className="generate-btn ">
              Generate
            </button>
          </div>
          <div className="home-img-box">
            <div>
              <img src={homeImg} alt="Home Image" className="home-image" />
              <img src={circle} alt="cicle-icon" className="circle-icon" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
