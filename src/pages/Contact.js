import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="about" className="section scrollspy">
        <h3 className="page-title white-text teal">Contact Me</h3>
        <div className="container flow-text">
          <blockquote>
            <h2>
              Email:{" "}
              <a
                href="mailto:goris.evelyn@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                goris.evelyn@gmail.com
              </a>{" "}
              <i className="fas fa-external-link-alt" />
            </h2>
            <h2>
              Github:{" "}
              <a
                href="https://www.github.com/SIROG-E"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/SIROG-E
              </a>
            </h2>
            <h2>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/evelyn-goris-78668a1b5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/evelyn-goris-78668a1b5/
              </a>
            </h2><h2>
              Phone:{" "}
              <a
                href="tel:423-505-4844"
                rel="noopener noreferrer"
              >
                (423) 505-4844
              </a>{" "}
            </h2>
          </blockquote>
        </div>
      </section>
    );
  }
}
