import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { skill: "Html+Css", level: "advanced", color: "#2662ea" },
  { skill: "JavaScript", level: "advanced", color: "#efd81d" },
  { skill: "Web Design", level: "advanced", color: "#c3dcaf" },
  { skill: "Git and GitHub", level: "intermediate", color: "#e84f33" },
  { skill: "React", level: "intermediate", color: "#60dafb" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return (
    <img className="avatar" src="avatar-pic/avatar.jpg" alt="Avatar-picture" />
  );
}

function Intro() {
  return (
    <div className="data">
      <h1>Hassan Mousavi</h1>
      <p>
        Front-end developer and a student who works on their projects very hard
        and foucsly.I like mobile games for example Call of duty mobile and
        Mobile Legend etc.
      </p>
    </div>
  );
}

{
  /* <div className="skill-list">
      <Skill skillName="Html+Css" icon="💪" color="#0000ff" />
      <Skill skillName="JavaScript" icon="💪" color="#ffff00" />
      <Skill skillName="Web Design" icon="💪" color="#90ee90" />
      <Skill skillName="Git and GitHub" icon="👍" color="#ff0000" />
      <Skill skillName="React" icon="💪" color="#add8e6" />
    </div> */
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <p className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill} {skillObj.level === "advanced" ? "💪" : "👍"}
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
