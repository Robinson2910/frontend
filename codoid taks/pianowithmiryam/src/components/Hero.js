// import Form from "./Form";
import Form from "./Form";
import { heroInfo } from "../data/heroinfo";
export default function Hero() {
  return (
    <section className="section-hero margin-bottom-md">
      <div className="hero ">
        <div className="hero-img-box">
          <img src={heroInfo.heroImageSrc} className="hero-img" alt="woman showing thumbs up" />
        </div>
        <div className="hero-text-box">
          <h1 className="primary-heading">{heroInfo.primaryHeading}</h1>
          <p className="hero-description">{heroInfo.heroDescription}</p>
          <Form />
          <div className="hero-top-location-box">
            <h2 className="secondary-heading">{heroInfo.secondaryHeading}</h2>
            <div className="top-countries">
              {heroInfo.topLocations.map((location) => (
                <a className="btn" href=" " key={location}>
                  {location}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
