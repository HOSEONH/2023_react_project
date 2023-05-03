import React, { useState, useContext } from 'react';
import DataContext from '../context/DataContext';

export default function Cart() {
  const { state, action } = useContext(DataContext);
  const { cartList } = state;
  const { setCartList } = action;
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (e, price) => {
    const checked = e.target.checked;
    const newTotalPrice = checked ? Math.max(totalPrice + price, 0) : Math.max(totalPrice - price, 0);
    setTotalPrice(newTotalPrice);
  };

  const deleteList = (i, price, quantity) => {
    const newCartList = [...cartList];
    newCartList.splice(i, 1);
    setCartList(newCartList);
    setTotalPrice(totalPrice - price * quantity);
  };

  const increaseQuantity = (id) => {
    const newCartList = [...cartList];
    const index = newCartList.findIndex(item => item.id === id);
    if (index !== -1) {
      const item = newCartList[index];
      item.quantity = item.quantity ? item.quantity + 1 : 2;
      setCartList(newCartList);
      setTotalPrice(totalPrice + item.price);
    }
  };

  return (
    <div style={{textAlign:'center', paddingTop:"100px" }}>
      { cartList.map((donut, i)=>(
        <div style={{border:"1px solid black", padding:"10px"}} key={donut.id}>
          <li>
            <input
              type="checkbox" 
              onChange={(e) => handleCheckboxChange(e, donut.price)}
            />
            {donut.name}
          </li>
          <li>{donut.price}원</li>
          <li>
            <img src={donut.image} alt={donut.name} style={{width:"80px"}}/>
          </li>
          <button onClick={()=>{deleteList(i, donut.price, donut.quantity || 1)}}>X</button>
          <div>
            수량: {donut.quantity || 1}
            <button onClick={() => increaseQuantity(donut.id)}>+</button>
          </div>
        </div>
      ))}
      <div>Total Price : {totalPrice}원</div>
    </div>
  );
}
