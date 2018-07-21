import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  const ingredientsArray = Object.keys(ingredients).map(ingKey => (
    [...Array(ingredients[ingKey])]
      .map((_, i) => <BurgerIngredient key={ingKey + i} type={ingKey} />)
      .reduce((arr, el) => arr.concat(el), [])
  ));

  

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type={'breadTop'} />
      {ingredientsArray}
      <BurgerIngredient type={'breadBottom'} />
    </div>
  )
};

export default burger;
