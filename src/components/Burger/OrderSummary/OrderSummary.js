import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    //This. could be a functional component, Does not have to be a class
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>
                        {igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Sheckout</p>
                <Button clicked={this.props.purchaseCancelled} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.purchaseContinue} btnType='Success'>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;
