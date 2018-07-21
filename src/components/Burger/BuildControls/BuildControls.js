import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <h2>Current price: {props.price.toFixed(2)}$</h2>
    {controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        disabled={props.disabled[control.type]}
        addIngredient={() => props.addIngredient(control.type)}
        removeIngredient={() => props.removeIngredient(control.type)}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
  </div>
);

export default buildControls;
