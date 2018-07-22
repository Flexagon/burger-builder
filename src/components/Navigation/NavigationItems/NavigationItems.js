import React from 'react';
import classes from './NavigationItems.css';
import NavigattionItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigattionItem link="/" active>Burger Builder</NavigattionItem>
    <NavigattionItem link="/">Checkout</NavigattionItem>
  </ul>
);

export default navigationItems;
