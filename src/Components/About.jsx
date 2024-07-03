/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/BG1.png";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a skilled front-end developer proficient in HTML, CSS, and JavaScript, with a strong foundation in React and a knack for utilizing CSS frameworks like Tailwind CSS to create responsive and visually appealing web applications. .";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web development",
  "User experience",
  "Responsive Design",
  "user interfaces",
];


const detailOrQuote =
  " I thrive in dynamic environments where innovation and problem-solving are key. As a quick learner, I adapt swiftly to new technologies and methodologies, ensuring that I deliver high-quality solutions that meet both user needs and business objectives."

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "blue",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
