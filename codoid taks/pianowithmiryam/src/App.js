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
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: (
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
    ),
    path: "/",
  },
  {
    element: <Navbar />,
    path: "/about us",
  },
  {
    element: <WeHelp />,
    path: "/contact Us",
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
