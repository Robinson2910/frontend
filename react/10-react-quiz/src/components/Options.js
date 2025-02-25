function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        //initially answer would be set to null
        //but if user clicks a button and answers it ,answer will be set and hence button will be disabled
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""}  ${
            hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
          }
            `}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;

// The behavior you're observing is due to JavaScript's closures. In JavaScript, functions "remember" the scope in which they were created, and they have access to variables and values within that scope even after the outer function (in this case, the `.map` function) has finished execution. This behavior is often referred to as a closure.

// In your code snippet, the `onClick` function is defined within the `.map` callback function. Even after the `.map` function has completed its execution, each generated `onClick` function retains access to the `index` variable from the outer scope. This is why the `index` value is accessible and correctly associated with the button when it's clicked.

// Here's a step-by-step explanation of what's happening:

// 1. The `.map` function iterates over the `question.options` array and generates a set of buttons. During this process, an `onClick` function is defined for each button, and each `onClick` function captures the `index` variable from the outer scope.

// 2. When a button is clicked, the associated `onClick` function is executed. At this point, the function still has access to the `index` variable because of the closure. This is how the correct `index` value is used as the payload in the `dispatch` function.

// Closures in JavaScript allow functions to "remember" the variables in their lexical scope, even after the outer function has completed its execution. This is a fundamental concept in JavaScript and is what makes the code you've provided work as expected.
