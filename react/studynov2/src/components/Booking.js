import { bookingDataInfo } from "../data/bookingDataInfo";
export default function Booking() {
  return (
    <section className="section-booking">
      <div className="booking">
        <div className="booking-content-box">
          <p className="booking-para">{bookingDataInfo.paraText}</p>
          <button className="booking-btn">{bookingDataInfo.buttonText}</button>
        </div>
      </div>
    </section>
  );
}
