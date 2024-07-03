import React from "react";

import image from "../images/BG3.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Weather app",
    description:
      "weather web app built using html,bootstrap and javascript.It is a simple weather forecasting application that uses weather API to fetch relevant data and display on front-end.",
    url: "https://github.com/KhurshidShaikh/weather-web-app",
  },
  {
    title: "Movix",
    description:
      "Web application that allows user search about movies & tv shows and showcase its related data. It also displays popular shows/movies weekly and daily.Developed using react,redux,scss and TMDB API for fetching data .",
    url: "https://github.com/KhurshidShaikh/movix",
  },
  {
    title: "Converse Chatbot",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilitiesA chatbot that responds to user's prompt in text format.It uses gemini API to get response for prompts and display it in a presentable format.",
    url: "https://github.com/KhurshidShaikh/Converse-Chatbot",
  },
  {
    title: "MCQ Game",
    description:
      "A Multiple choice question game that enables user to select option and also allows navigation between questions and the final score is displayed on end of the game",
    url: "https://github.com/KhurshidShaikh/MCQ-Game",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{backgroundColor: "wheat"}}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
