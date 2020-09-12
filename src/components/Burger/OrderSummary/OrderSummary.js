import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
	
	// This could be a functional component,
	// It became class-based to debug/show wrapping element's process
	componentDidUpdate() {
		console.log('[OrderSummary] did update')
	}

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
					{this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Aux>
				<h3>Your order</h3>
				<p>A delicious burger with:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p>
					<strong>Total Price: {this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to checkout?</p>
				<Button btnType="Danger" clicked={ this.props.purchaseCancelled }>Cancel</Button>
				<Button btnType="Success" clicked={ this.props.purchaseContinued }>Continue</Button>
			</Aux>
		);
	}
}


const orderSummary = (props) => {
	
};

export default OrderSummary;
