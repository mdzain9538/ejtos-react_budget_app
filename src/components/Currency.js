import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const currency = () => {
  const { dispatch } = useContext(AppContext);

  const changecurrency = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    });
  };

  return (
    <div className='alert alert-success'>
      Currency
      <select name="currency" id="currency" onChange={(event) => changecurrency(event.target.value)} >
        <option value="$">$ Dollar</option>
        <option value="£" selected>£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default currency;
