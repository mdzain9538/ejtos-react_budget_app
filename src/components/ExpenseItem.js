import React, { useContext } from 'react';
import { TiMinus } from 'react-icons/ti';
import { TiPlus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);


    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><TiPlus  size='1.5em' style={{ background: 'green', color:'white', borderRadius:100}}  onClick={event=> increaseAllocation(props.name)}></TiPlus></td>
        <td><TiMinus size='1.5em' onClick={event=> decreaseAllocation(props.name)}  style={{ background: 'red', color:'white', borderRadius:100}}></TiMinus></td>
        </tr>
    );
};

export default ExpenseItem;
