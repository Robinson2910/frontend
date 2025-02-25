import { weHelpObject } from "../data/weHelpObject";
export default function WeHelp() {
  return (
    <section className="section-we-help">
      <h2 className="we-help-heading">{weHelpObject.heading}</h2>
      <div className="container grid grid--4-cols">
        {weHelpObject.weHelpInfo.map((item, index) => (
          <div className="we-help-card" key={index}>
            <div className="we-help-img-box">
              <img src={item.imgSrc} alt={item.description} className="we-help-img" />
            </div>
            <div className="we-help-text-box">
              <p className="we-help-description">{item.description}</p>
            </div>
          </div>
        ))}
        <h6>{weHelpObject.heading}</h6>
      </div>
    </section>
  );
}
