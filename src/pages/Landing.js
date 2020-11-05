import React, { Component } from 'react'
import mobile from 'is-mobile'

export default class Landing extends Component {
  mainImage = mobile() ? <img alt="Evelyn Goris" className="mainImage" src="static/img/mainImage/Me.jpg" />
    : <img alt="Evelyn Goris" className="mainImage" src="static/img/mainImage/Me.jpg" />
  render() {
    return (
      <section id="intro" className="section scrollspy full-height">
        <div className="overlay">
          {this.mainImage}
        </div>
        <div className="container introText">
          <h2>Hello World, I'm Evelyn! </h2>
        </div>
      </section>
    )
  }
}
