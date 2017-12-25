import React, { Component } from 'react';
import '../App.css';
import firebase from '../firebase';
import HeroList from './HeroList';
import AddHero from './AddHero';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: []
    };
  }
  render() {
    return (
      <div className="App">
        <AddHero />
        <HeroList heroes={this.state.heroes} />
      </div>
    );
  }

  componentDidMount() {
    const heroesRef = firebase.database().ref('heroes');
    heroesRef.on('value', snap => {
      let heroes = snap.val();
      let newHeroListState = [];
      for (let hero in heroes) {
        newHeroListState.push({
          key: hero,
          heroName: heroes[hero].name,
          primaryAtt: heroes[hero].primaryAttribute
        });
      }
      this.setState({
        heroes: newHeroListState
      });
      console.log(this.state.heroes);
    });
  }
}

export default App;
