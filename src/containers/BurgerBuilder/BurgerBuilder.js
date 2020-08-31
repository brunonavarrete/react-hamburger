import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends React.Component { 

	state = {
		salad: 0,
		cheese: 0,
		meat: 0,
		bacon: 0
	}

	render() {
		return (
			<Aux>
				<Burger ingredients={ this.state } />
				<BuildControls />
			</Aux>
		);
	}
}

export default BurgerBuilder;