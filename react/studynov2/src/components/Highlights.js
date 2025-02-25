import { highlightsObject } from "../data/highlightsObject";
export default function Highlights() {
  return (
    <section className="section-highlights margin-bottom-md">
      <div className="highlights container ">
        <h2 className="highlights-heading margin-bottom-md">
          {highlightsObject.highlightsHeading}
        </h2>
        <div className="highlights-grid ">
          {highlightsObject.highlightsItems.map((el, i) => {
            return (
              <div className="card" id="card--1" key={i}>
                <div className="card-content">
                  <div className="card-img-box">{el.icon}</div>
                  <div className="card-text-box">
                    <h2 className="card-heading">{el.heading}</h2>
                    <p className="card-para">{el.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
