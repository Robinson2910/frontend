import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skillset = [
  { skill: "React", level: "intermediate", color: "blue" },
  { skill: "JavaScript", level: "advanced", color: "yellow" },
  { skill: "HTML", level: "beginner", color: "red" },
  { skill: "CSS", level: "intermediate", color: "green" },
  { skill: "Node.js", level: "intermediate", color: "purple" },
  { skill: "SQL", level: "beginner", color: "orange" },
];

console.log(skillset);

function App() {
  return (
    <div className="container">
      <Header />
      <Intro />
      <SkillSet skillsetObj={skillset} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <img src="robin.jpg" alt="Robin" className="img" />
    </div>
  );
}
function Intro() {
  return (
    <div className="main">
      <h1 style={{ marginBottom: "16px" }}>Robinson Manuvel</h1>
      <p style={{ marginBottom: "8px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus, iure eveniet
        magnam, labore esse, dolore veniam necessitatibus quia blanditiis inventore? Iure doloribus
        animi id nam consectetur minima sequi rerum.
      </p>
    </div>
  );
}
function SkillSet({ skillsetObj }) {
  return (
    <div className="grid grid--2--cols main">
      {/* <Skill skill="Angular" emoji="💪" color="red" /> */}
      {skillset.map((skill) => (
        <Skill skill={skill.skill} emoji={skill.emoji} color={skill.color} />
      ))}
    </div>
  );
}
function Skill(props) {
  return (
    <p className="skill " style={{ backgroundColor: props.color }}>
      {props.skill} {props.emoji}
    </p>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
