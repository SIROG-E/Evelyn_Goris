import React, { Component } from "react";

export default class AboutItem extends Component {
  render() {
    const { AboutContent } = this.props;
    const Accomplishments = AboutContent.Accomplishments.map(
      accomplishment => {
        return <li key={accomplishment}>{accomplishment}</li>;
      }
    );

    return (
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a
                href={AboutContent.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt={AboutContent.alt}
                  src={"static/img/about/" + AboutContent.logo}
                  className="responsive-img center-block"
                />
              </a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title">
                  <a
                    href={AboutContent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="teal-text hoverline"
                  >
                    {AboutContent.about}
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className="role brown-text">{AboutContent.role}</div>
          {Accomplishments.length ? (
            <div>
              <h6></h6>
              <ul>{Accomplishments}</ul>
            </div>
          ) : null}
        </div>
        <div className="card-action">
        </div>
      </div>
    );
  }
}
