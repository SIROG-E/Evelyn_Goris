import React, { Component } from "react";
import SkillData from "../Content/SkillData";

export default class Skills extends Component {
  render() {
    const programmingLanguages = SkillData.programmingLanguages.map(
      programmingLanguage => {
        return (
          <div key={programmingLanguage.name} className="skill col s6 m2">
            <img
              alt={programmingLanguage.name}
              src={"static/img/skills/" + programmingLanguage.image}
              className="responsive-img"
            />
            {programmingLanguage.name}
          </div>
        );
      }
    );

    const webDevelopmentSkills = SkillData.webDevelopment.map(
      webDevelopmentSkill => {
        return (
          <div key={webDevelopmentSkill.name} className="skill col s6 m2">
            <img
              alt={webDevelopmentSkill.name}
              src={"static/img/skills/" + webDevelopmentSkill.image}
              className="responsive-img"
            />
            {webDevelopmentSkill.name}
          </div>
        );
      }
    );

    const databases = SkillData.databases.map(database => {
      return (
        <div key={database.name} className="skill col s6 m2">
          <img
            alt={database.name}
            src={"static/img/skills/" + database.image}
            className="responsive-img"
          />
          {database.name}
        </div>
      );
    });

    const otherSkills = SkillData.otherSkills.map(otherSkill => {
      return (
        <div key={otherSkill.name} className="skill col s6 m2 mb-2">
          <img
            alt={otherSkill.name}
            src={"static/img/skills/" + otherSkill.image}
            className="responsive-img"
          />
          {otherSkill.name}
        </div>
      );
    });

    return (
      <section id="skills" className="section scrollspy">
        <h3 className="page-title white-text teal">Skills</h3>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Programming Languages</h4>
              <div className="row text-center">{programmingLanguages}</div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Databases</h4>
              <div className="row text-center">{databases}</div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Web Development</h4>
              <div className="row text-center">{webDevelopmentSkills}</div>
            </div>
          </div>

          <div className="card">
            <div className="card-content">
              <h4 className="brown-text light">Other</h4>
              <div className="row text-center">{otherSkills}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
