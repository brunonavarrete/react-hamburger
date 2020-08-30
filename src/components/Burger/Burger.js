import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
	const transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => {
			return [...Array(props.ingredients[igKey])].map((x, index) => {
				return <BurgerIngredient key={ igKey + index } type={ igKey } />
			})
		});
	return (
		<div className={ classes.Burger }>
			<BurgerIngredient type="bread-top" />
			{ transformedIngredients }
			<BurgerIngredient type="bread-bottom" />
    	</div>
  	)
}

export default burger;