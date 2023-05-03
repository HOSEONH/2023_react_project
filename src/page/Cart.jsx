import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Cart() {
  const {state} = useContext(DataContext)
  const { cartList } = state;


  return (
    <div>
      <h2>Shopping Cart</h2>
      { cartList.map((donut)=>(
            <div>
              <li>{donut.name}</li>
              <li>{donut.price}</li>
              <li>{donut.id}</li>
            </div>
          )
        )
      }
    </div>
  );
}
