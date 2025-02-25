import { availableStreamsInfo } from "../data/availabeStreamsInfo";
export default function AvailableStreams() {
  return (
    <section className="section-available-streams">
      <div className="available-streams container">
        <h3 className="available-streams-heading">{availableStreamsInfo.heading}</h3>
        <p className="available-streams-para">{availableStreamsInfo.description}</p>
        <div className="streams-btns">
          {availableStreamsInfo.streamButtons.map((stream, index) => (
            <button key={index} className="stream-btn">
              {stream}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
