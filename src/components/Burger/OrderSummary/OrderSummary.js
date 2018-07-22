import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(ingKey => (
    <li key={ingKey}>
      <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order</h3>
      <p>Burger with ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {props.price.toFixed(2)}$</strong></p>
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaseCancelHandler}>CANCEL</Button>
      <Button buttonType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;
