import { useState } from "react";

export default function Accordion({ data }) {
  return (
    <div className="accordion-box container">
      {data.map((el, i) => (
        <AccordionItem title={el.question} text={el.answer} num={i} key={el.question} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      {/* <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p> */}
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && (
        <div className="answer-box">
          <h2 className="answer-box-heading">Answer</h2>
          <p className="answer"> {text}</p>
        </div>
      )}
    </div>
  );
}
