import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progres";
import NextButton from "./NextButton";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
const SECS_PER_QUESTION = 30;
const initialState = {
  questions: [],

  // 'loading','error','ready','active','finished'
  //LOADING IMPLIES QUESTIONS ARE YET TO BE FETCHED
  //ERROR IMPLIES ERROR HAPPENED DURING FETCHING
  //READY IMPLIES QUESTIONS ARE FETCHED
  //ACITVE IS STATUS WHEN QUIZ IS ACTIVE
  //FINISH IS IN WHEN QUIZ IS FINISHED
  status: "loading",
  index: 0, //lets to know which question we are in now
  answer: null, //answer
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

//when we click the start button
//we set status as active
//and update secondsRemaining
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining:
          state.questions.length *
          SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(
        state.index
      );
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload ===
          question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore
            ? state.points
            : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining:
          state.secondsRemaining - 1,
        status:
          state.secondsRemaining === 0
            ? "finished"
            : state.status,
      };
    default:
      throw new Error("action unknown");
  }
}
export default function App() {
  // For components with a large number of state variables
  // Better suited for handling complex state logic
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const {
    status,
    questions,
    index,
    answer,
    points,
    highScore,
    secondsRemaining,
  } = state;
  console.log(state);
  const numQuestions = questions?.length;
  console.log(questions);
  let maxPossiblePoints;
  if (numQuestions > 2) {
    maxPossiblePoints = questions?.reduce(
      (prev, curr) => prev + curr.points,
      0
    );
  }
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "dataReceived",
          payload: data,
        })
      )
      .catch((e) =>
        dispatch({ type: "dataFailed" })
      );
  }, []);
  console.log(status);
  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch}
          />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={
                maxPossiblePoints
              }
              answer={answer}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
            <Footer>
              <Timer
                dispatch={dispatch}
                secondsRemaining={
                  secondsRemaining
                }
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishedScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
