import React, { Component } from "react";

export default class AboutItem extends Component {
  render() {
    const { AboutContent } = this.props;
    const Accomplishments = AboutContent.accomplishments.map(
      accomplishment => {
        return <h7 key={accomplishment}>{accomplishment}</h7>;
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
              <div>
                <h7 className="bio">{Accomplishments}</h7>
              </div>
              <div>
                <ul className="goals">
                  <li>Showcase the analytical skills I have developed through my abouts.</li>
                  <li>Reflect on how these abouts have shaped my academic and professional goals</li>
                  <li>Highlight some of my accomplishments.</li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
        <div className="card-action">
          <span>
            ♡
          </span>
        </div>
      </div>
    );
  }
}
