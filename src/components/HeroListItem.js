import React, { Component } from 'react';
import firebase from '../firebase';

const HeroListItem = hero => {
  const heroName = hero.hero.heroName;
  return <li className="list-group-item bg-dark">{heroName}</li>;
};

export default HeroListItem;
