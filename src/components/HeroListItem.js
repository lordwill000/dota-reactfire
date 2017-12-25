import React, { Component } from 'react';
import firebase from '../firebase';

const HeroListItem = hero => {
  const heroName = hero.hero.heroName;
  return <li>{heroName}</li>;
};

export default HeroListItem;
