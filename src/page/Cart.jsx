import React, { useState, useContext, useEffect } from 'react';
import DataContext from '../context/DataContext';
import '../css/cart.css'

export default function Cart() {
  const { state, action } = useContext(DataContext);
  const { cartList } = state;
  const { setCartList } = action;
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartList.forEach((donut) => {
      totalPrice += donut.price * (donut.quantity || 1);
    });
    setTotalPrice(totalPrice);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cartList]);

  const Checked = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(totalPrice);
    }
  };


  const deleteList = (i, price, quantity) => {
    const newCartList = [...cartList];
    newCartList.splice(i, 1);
    setCartList(newCartList);
    setTotalPrice(totalPrice - price * quantity);
  };
  

  const decreaseQuantity = (id, price) => {
    const newCartList = [...cartList];
    const index = newCartList.findIndex(item => item.id === id);
    if (index !== -1) {
      const item = newCartList[index];
      if (item.quantity > 1 && totalPrice > 0) { // totalPrice가 0 이상일 때만 수량을 감소시킴
        item.quantity--;
        setCartList(newCartList);
        setTotalPrice(totalPrice - price);
      }
    }
  };
  
  const increaseQuantity = (id, price) => {
    const newCartList = [...cartList];
    const index = newCartList.findIndex(item => item.id === id);
    if (index !== -1) {
      const item = newCartList[index];
      item.quantity++;
      setCartList(newCartList);
      setTotalPrice(totalPrice + price);
    }
  };

  return (
    <div style={{textAlign:'center', paddingTop:"100px" }}>
      { cartList.map((donut, i)=>(
        <div className='cart-item' style={{border:"1px solid black", padding:"10px", listStyle:"none"}} key={donut.id}>
          <li>
            <input
              type="checkbox" 
              onChange={(e) => Checked(e, donut.price, donut.quantity || 1)}
              className='chk_box'
            />
          </li>

          <li>
            <img src={donut.image} alt={donut.name} style={{width:"80px"}}/>
          </li>
          
          <li>{donut.name}</li>
          
          <li>&#8361;{donut.price * (donut.quantity || 1)}</li>
          <div>
            <button onClick={() => decreaseQuantity(donut.id, donut.price)}> - </button>
              {donut.quantity || 1}
            <button onClick={() => increaseQuantity(donut.id, donut.price)}> + </button>
          </div>
          <button onClick={()=>{deleteList(i, donut.price, donut.quantity || 1)}}>X</button>
        </div>
      ))}
      <div>총 상품금액 &#8361;{totalPrice}원</div>
    </div>
  );
}