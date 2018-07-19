import React from 'react';
import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
  const { type } = props;
  const ingredients = ['breadBottom', 'breadTop', 'meat', 'salad', 'cheese', 'bacon'];

  ingredients.map(ingredient => {
    const className = type[0].toUpperCase() + type.slice(1);

    if (!type) return '';

    if (type === 'breadTop') {
      return (
        <div className={classes[className]}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      )
    }

    return <div className={classes[className]} />
  });
};

export default burgerIngredient;
