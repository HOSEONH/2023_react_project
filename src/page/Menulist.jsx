import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import '../css/menulist.css'

export default function Menulist() {
  const { state, action } = useContext(DataContext);
  const { donutList, cartList } = state 
  const { setCartList } = action;
  const [selectedMenu, setSelectedMenu] = useState("All");

  const donutMenu = ["All", "LIMITED", "DOZEN", "GLAZED", "FILLED", "CAKE", "COFFEE", "DRINKS"];

  const addCartlist = (donut) => {
    const cartItem = cartList.find(item => item.id === donut.id);
    if (cartItem) {
      const newList = cartList.map(item => {
        if (item.id === donut.id) {
          return {
            ...item,
            quantity: 1 // 기존 수량을 무시하고 1로 설정
          }
        } else {
          return item;
        }
      });
      setCartList(newList);
    } else {
      const newCart = {
        id: donut.id,
        name: donut.name,
        image: donut.image,
        price: donut.price,
        quantity: 1
      }
      const newList = cartList.concat(newCart);
      setCartList(newList);
    }
  }

  const filteredDonutList = selectedMenu === "All" ? donutList : donutList.filter(donut => donut.category === selectedMenu);

  return (
    <div style={{paddingTop:"100px"}}>
      <div className='menu-wrap' ></div>
        <div className='menu-box'>
          { donutMenu.map((m, i)=>(
            <span
              key={i}
              onClick={() => setSelectedMenu(m)}
            >
              {m}
            </span>
        ))}
      </div>

      <div className='div-wrap'>
      {filteredDonutList.map((donut) => (
        <div key={donut.id} className='donuts'>
          <div 
            className='cart-icon'
            onClick={()=>{addCartlist(donut)}}
          >
          </div>
          <Link to={`/menulist/${donut.id}`}>
            <img src={donut.image} alt={donut.name} />
          </Link>
          <li>{donut.name}</li>
          <li>&#8361;{donut.price}</li>
        </div>
      ))}
      </div>
    </div>
  )
}