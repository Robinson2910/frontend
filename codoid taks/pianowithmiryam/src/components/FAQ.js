import { useState } from "react";
import { useEffect } from "react";
import { faqData } from "../data/faqData";
import Accordion from "./faqAccordion";
// export default function FAQ() {
//   return (
//     <section className="section-faq">
//       <h2 className="faq-heading">FREQUENTLY ASKED QUESTION</h2>
//       <div className="container faq-box">
//         <div className="questions-box">
//           <button className="question-btn">How to choose a country for education?</button>
//           <button className="question-btn">Am i eligible for a course of my choice?</button>
//           <button className="question-btn">
//             Which countries are suitable for Indian Students?
//           </button>
//           <button className="question-btn">Are there any Scholarships available?</button>
//           <button className="question-btn">What requirements do i need to fullfill?</button>
//           <button className="question-btn">How much will course cost</button>
//           <button className="question-btn">How and when do I pay for StudyNov Services?</button>
//           <button className="question-btn">How to choose a country for education?</button>
//           <button className="question-btn">How to choose a country for education?</button>
//         </div>
//         <div className="answer-box">
//           <h2 className="answer-box-heading">Answer</h2>
//           <p className="answer">
//             As the best education consultants in Chennai, we have a comprehensive understanding of
//             countries suitable for Indian students. Popular destinations include Canada, Australia,
//             the US, the UK, Germany, France, and Singapore. Our study abroad consultants in Chennai
//             provide you with detailed insights into the availability of courses, living expenses,
//             university rules, and regulations, helping you make an informed decision.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
export default function FAQ() {
  const [questionNo, setQuestionNo] = useState(0);
  function handleButtonClick(num) {
    setQuestionNo(num);
  }

  const largeScreenContent = (
    <section className="section-faq">
      <h2 className="faq-heading">{faqData.headingText}</h2>
      <div className="container faq-box">
        <div className="questions-box">
          {faqData.faqItems.map((item, index) => (
            <QuestionBtn
              key={index}
              text={item.question}
              num={index}
              onButtonClick={handleButtonClick}
            />
          ))}
        </div>
        <div className="answer-box">
          <h2 className="answer-box-heading">{faqData.answerBoxHeading}</h2>
          <p className="answer">{faqData.faqItems[questionNo].answer}</p>
        </div>
      </div>
    </section>
  );
  const smallScreenContent = (
    <section className="section-faq">
      <h2 className="faq-heading">{faqData.headingText}</h2>
      <Accordion data={faqData.faqItems} />
    </section>
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to check if the screen width is below a certain breakpoint
  function isSmallScreen() {
    return windowWidth <= 944; // Adjust the breakpoint as needed
  }

  // Update the windowWidth state when the window is resized
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen() ? smallScreenContent : largeScreenContent;
}
function QuestionBtn({ text, onButtonClick, num }) {
  return (
    <button className="question-btn" onClick={() => onButtonClick(num)}>
      {text}
    </button>
  );
}
