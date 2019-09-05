import React,{Component} from 'react';
import Aux from '../../hoc/Au/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
   
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey =>{
        return (<li key={igKey}>
            <span style={{textTransform:"capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>);
    });
        return(
            <Aux>
            <h3>Your Orders</h3>
            <p>Following Ingredients :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price}</strong></p>
            <Button btnType='Danger' clicked={this.props.cancelClicked}>Cancel</Button>
            <Button btnType="Success" clicked={this.props.continueClicked}>Continue</Button>
        </Aux>
        );
    }
}

export default OrderSummary;