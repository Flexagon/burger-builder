import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  meat: 3,
  cheese: 0.4,
};

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 4,
    purchasable: false,
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(ingKey => ingredients[ingKey]).reduce((sum, el) => (sum + el), 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredient = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(newIngredients)
  }

  removeIngredient = (type) => {
    if (this.state.ingredients[type] <= 0) return;
    const newCount = this.state.ingredients[type] - 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = newCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceAddition;
    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(newIngredients)
  }

  render() {
    const disabledInfo = { ...this.state.ingredients };
    Object.keys(disabledInfo).map(ingredient => disabledInfo[ingredient] = disabledInfo[ingredient] <= 0);

    return(
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
      </Aux>
    )
  }
}
