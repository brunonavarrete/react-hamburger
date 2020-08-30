import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

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
				<div>Burger Controls</div>
			</Aux>
		);
	}
}

export default BurgerBuilder;