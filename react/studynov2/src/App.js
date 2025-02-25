import "./css/App.css";
import "./css/queries.css";
import "./css/highlights.css";
import "./css/availableStreams.css";
import "./css/weHelp.css";
import "./css/Booking.css";
import "./css/FAQ.css";
import "./css/faqAccordion.css";
import "./css/contactForm.css";
// import { useState } from "react";
// import Form from "./Form";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import AvailableStreams from "./components/AvailableStreams";
import WeHelp from "./components/WeHelp";
import Booking from "./components/Booking";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <AvailableStreams />
      <WeHelp />
      <Booking />
      <FAQ />
      <ContactForm />
    </>
  );
}

export default App;
