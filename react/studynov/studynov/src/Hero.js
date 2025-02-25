import Form from "./Form";
export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-img-box">
          <img src="heroimg.png" className="hero-img" alt="woman showing thumbs up" />
        </div>
        <div className="hero-text-box">
          <h1 className="primary-heading">Let Your Dreams Take Off with StudyNov</h1>
          <p className="hero-description">
            Embark on a transformative journey of education, exploration, and personal growth with
            StudyNov, your trusted partner in education consultancy services. We are your dedicated
            partner in turning your study abroad dreams into a reality.
          </p>
          <Form />
          <div className="hero-top-location-box">
            <h2 className="secondary-heading">Top Location</h2>
            <div className="top-countries">
              <a className="btn" href=" ">
                UK
              </a>
              <a className="btn" href=" ">
                Australia
              </a>
              <a className="btn" href=" ">
                New Zealand
              </a>
              <a className="btn" href=" ">
                Germany
              </a>
              <a className="btn" href=" ">
                Netherlands
              </a>
              <a className="btn" href=" ">
                France
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
