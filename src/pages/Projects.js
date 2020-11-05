import React, { Component } from 'react'
import ProjectItem from '../components/ProjectItem.jsx';
import ProjectContents from '../Content/ProjectData'

export default class Projects extends Component {

  ProjectItems = ProjectContents.map(ProjectContent => {
    return <ProjectItem key={ProjectContent.name} ProjectContent={ProjectContent} />
  })

  render() {
    return (
      <section id="projects" className="section scrollspy">
        <h3 className="page-title white-text teal">Projects</h3>
        <div className="container">
          <div className="row">
            {this.ProjectItems}
          </div>
        </div>
      </section>
    )
  }
}
