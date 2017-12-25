import React, { Component } from 'react';
import firebase from '../firebase';

export default class AddHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroName: '',
      heroPrimaryAtt: ''
    };
    this.onHeroNameInputChange = this.onHeroNameInputChange.bind(this);
    this.onAddHeroSubmit = this.onAddHeroSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.onAddHeroSubmit}>
        <h4 className="text-center">Add Hero</h4>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="heroName"
            onChange={this.onHeroNameInputChange}
            value={this.heroName}
            placeholder="Hero name"
          />
          <input
            className="form-control"
            type="text"
            name="heroPrimaryAtt"
            onChange={this.onHeroNameInputChange}
            value={this.heroPrimaryAtt}
            placeholder="Hero Primary Attribute"
          />
          <button className="btn bg-dota full-width">Add</button>
        </div>
      </form>
    );
  }
  onHeroNameInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onAddHeroSubmit(e) {
    e.preventDefault();
    const heroRef = firebase.database().ref('heroes');
    const heroInfo = {
      name: this.state.heroName,
      primaryAttribute: this.state.heroPrimaryAtt
    };
    heroRef.push(heroInfo);
    this.setState({
      heroName: '',
      heroPrimaryAtt: ''
    });
  }
}
