import React from "react";
import Project from "../../components/Project";
import passwordGenerator from "../../assets/password_generator.jpg";
import codingQuiz from "../../assets/TimedQuiz.jpg";
import workDayPlanner from "../../assets/workdayscheduler.jpg";
import weatherDashboard from "../../assets/weather_dashboard.jpg";
import burgerLogger from "../../assets/pointless_adventures.jpg";
import ToDoList from "../../assets/todolist.jpg";
import budgetTracker from "../../assets/budgetTracker.jpg";

function Portfolio(props) {
  //   const imagePath = "./Assets/Images/"
  const projects = [
    {
      name: "Budget tracker",
      imageURL: budgetTracker,
      appLink: "https://Rumikitum.github.io/Budget-Tracker-Profiles/",
      githubLink: "https://github.com/Rumtikitum/Budget-Tracker-Profiles",
    },
    {
      name: "Password Generator",
      imageURL: passwordGenerator,
      appLink: "https://jerry4905.github.io/password-generator/",
      githubLink: "https://github.com/jerry4905/password-generator",
    },
    {
      name: "Coding Quiz",
      imageURL: codingQuiz,
      appLink: "https://jerry4905.github.io/Timed-Quiz/",
      githubLink: "https://github.com/jerry4905/Timed-Quiz",
    },
    {
      name: "Work Day Scheduler",
      imageURL: workDayPlanner,
      appLink: "https://jerry4905.github.io/schedular/",
      githubLink: "https://github.com/jerry4905/schedular",
    },
    {
      name: "Weather Dashboard",
      imageURL: weatherDashboard,
      appLink: "https://jerry4905.github.io/weather/",
      githubLink: "https://github.com/jerry4905/weather",
    },
    {
      name: "Pointless Adventures",
      imageURL: burgerLogger,
      appLink: "https://jerry4905.github.io/pointless-adventures/",
      githubLink: "https://github.com/jerry4905/pointless-adventures",
    },
    {
      name: "To Do List",
      imageURL: ToDoList,
      appLink: "https://jerry4905.github.io/To-do-list/",
      githubLink: "https://github.com/jerry4905/To-do-list",
    },
  ];
  return (
    <div className="row">
      <div className="col-md-9">
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="card-title" title="Portfolio">
              <span id="portfolio">Portfol</span>
              <strong>
                <span id="io">io</span>
              </strong>
            </h1>
            <hr></hr>
            <Project projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
