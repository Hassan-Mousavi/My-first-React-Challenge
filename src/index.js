import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function SkillList() {
  return (
    <div className="skill-list">
      <Skill
        skillName="Html+Css"
        icon="💪"
        backgroundcolor={{ backgroundColor: "#0000ff" }}
      />
      <Skill
        skillName="JavaScript"
        icon="💪"
        backgroundcolor={{ backgroundColor: "#ffff00" }}
      />
      <Skill
        skillName="Web Design"
        icon="💪"
        backgroundcolor={{ backgroundColor: "#90ee90" }}
      />
      <Skill
        skillName="Git and GitHub"
        icon="👍"
        backgroundcolor={{ backgroundColor: "#ff0000" }}
      />
      <Skill
        skillName="React"
        icon="💪"
        backgroundcolor={{ backgroundColor: "#add8e6" }}
      />
    </div>
  );
}

function Skill(props) {
  return (
    <p className="skill" style={props.backgroundcolor}>
      {props.skillName} {props.icon}
    </p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
