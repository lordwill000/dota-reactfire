import React from 'react';
import firebase from '../firebase.js';
import HeroListItem from './HeroListItem';

const HeroList = props => {
  const HeroesSingle = props.heroes.map(hero => {
    return <HeroListItem key={hero.key} hero={hero} />;
  });
  return <ul>{HeroesSingle}</ul>;
};

export default HeroList;
