import React from 'react';
import classes from './BuildControl.css';

const buildControl = ({ label, disabled, addIngredient, removeIngredient }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less} onClick={removeIngredient} disabled={disabled}>Less</button>
    <button className={classes.More} onClick={addIngredient}>More</button>
  </div>
);

export default buildControl;
