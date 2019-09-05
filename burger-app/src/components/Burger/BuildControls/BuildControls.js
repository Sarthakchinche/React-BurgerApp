import React from 'react';
import classes from '../BuildControls/BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'

const controls = [
    {label: 'Salad',  type: 'salad'},
    {label: 'Cheese',  type: 'cheese'},
    {label: 'Bacon',  type: 'bacon'},
    {label: 'Meat',  type: 'meat'}
]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h3>Current Price: <strong>{props.price.toFixed(2)}</strong></h3>
        {controls.map(ctrl =>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added = {() => props.ingredientAdded(ctrl.type)}
                remove = {() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'Signup to Order'}</button>
    </div>
);

export default buildControls;