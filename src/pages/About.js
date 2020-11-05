import React, { Component } from 'react'
import AboutItem from '../components/AboutItem.jsx'
import AboutContents from '../Content/AboutData'

export default class About extends Component {

  AboutItems = AboutContents.map(AboutContent => {
    return <AboutItem key={AboutContent.about} AboutContent={AboutContent} />
  })

  render() {
    return (
      <section id="about" className="section scrollspy">
        <h3 className="page-title white-text teal">About Me</h3>
        <div className="container">
          {this.AboutItems}
        </div>
      </section>
    )
  }
}
