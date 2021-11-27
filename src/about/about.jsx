import React from "react";
import style from "./about.module.css";

function About() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>About Me</h1>
      <section>
        <article className={style.personality}>
          <img
            src={process.env.PUBLIC_URL + "/img/autodidact.jpg"}
            alt="autodidact"
            className={style.personalityImg}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/delivers.jpg"}
            alt="delivers"
            className={style.personalityImg}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/empathy.jpg"}
            alt="empathy"
            className={style.personalityImg}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/flexibility.jpg"}
            alt="flexibility"
            className={style.personalityImg}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/passion.jpg"}
            alt="passion"
            className={style.personalityImg}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/teamplayer.jpg"}
            alt="teamplayer"
            className={style.personalityImg}
          />
        </article>
        <article className={style.introduction}>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/img/svg/designer.svg"}
              alt="designer"
              className={style.introductionImg}
            />
          </div>
          <div>
            <h4>
              UX designer-developer (hybrid) focused on both customer and
              business needs. Champions client ideas and produces solutions for
              development and product design that meet revenue goals.
            </h4>
            <ul>
              <li className={style.listStyle}>
                <strong>“How it Works” Focus:</strong> Adept at conceptualizing
                design ideas and bringing them to life with a focus on analysis,
                business requirements, and optimizing user experience.
              </li>
              <li className={style.listStyle}>
                <strong>Innovative Thinker:</strong> Sees the big picture and
                provides creative, unique solutions for customers, with the goal
                of engaging users and earning their repeat visits.
              </li>
              <li className={style.listStyle}>
                <strong>Business Results:</strong> Successful history of
                creating apps, landing pages, and new components that
                significantly increase traffic and revenue.
              </li>
            </ul>
          </div>
        </article>
        <article className={style.skill}>
          <ul>
            <li className={style.listStyle}>
              UX Skills: Usability Testing, Rapid Prototyping and Wireframes,
              Interaction Design, User Research (interviews, surveys),
              Experience Strategy, Experience Map, User Journeys, Storyboards,
              Task Flows, Heuristic Evaluation, Information Architecture, UI
              Design/Graphic Design
            </li>
            <li className={style.listStyle}>
              UX Tools: Axure, Figma, Adobe XD, Sketch App
            </li>
            <li className={style.listStyle}>
              Languages: HTML 5, CSS3, JS, PHP, MYSQL, React JS, Angular,
              Jquery, Bootstrap
            </li>
          </ul>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/img/svg/skills.svg"}
              alt="skills"
              className={style.skillImg}
            />
          </div>
        </article>
      </section>
    </main>
  );
}

export default About;
