import React from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component { 

	state = {
		salad: 1,
		cheese: 2,
		meat: 2,
		bacon: 1
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