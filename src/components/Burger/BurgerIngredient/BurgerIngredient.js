import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

export default class BurgerIngredient extends Component {
  render() {
    const { type } = this.props;
    const className = type[0].toUpperCase() + type.slice(1);

    if (type === 'breadTop') {
      return (
        <div className={classes[className]}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      )
    }

    return <div className={classes[className]} />;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};
