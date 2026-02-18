import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Krystian Sitarz</span>{" "}
            from <span className="purple">Krakow, Poland</span>.
            <br />
            I’m currently a {" "}
            <span className="purple">student</span> at{" "}
            <span className="purple">AGH University of Krakow</span>.
            <br />I am purchasing the M.Eng. in{" "}
            <span className="purple">Computer Science and Intelligent Systems</span>
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Ice scating ⛸
            </li>
            <li className="about-activity">
              <ImPointRight /> Weight lifting 🏋️‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
