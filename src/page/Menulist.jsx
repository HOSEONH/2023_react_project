import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import '../css/menulist.css'

export default function Menulist() {
  const { state, action } = useContext(DataContext);
  const { donutList, cartList } = state;
  const { setCartList } = action;

  const donutMenu = ["All", "FEATURED", "ICED", "GLAZED", "FILLED", "CAKE", "COFFEE", "DRINKS"];

  const addCartlist = (donut) => {
    const newCart = {
      id: donut.id,
      name: donut.name,
      image: donut.image,
      price: donut.price
    }
    const newList = cartList.concat(newCart);
    setCartList(newList);
  }

  return (
    <div style={{paddingTop:"100px"}}>
      <div className='menu-box'>
          { donutMenu.map((m, i)=>(
            <span key={i}>{m} | </span>
            ))}
      </div>

      <div className='divdiv'>
      {donutList.map((donut) => (
        <div key={donut.id} className='menulist'>
          <div 
            className='kkk'
            faCartShopping
            onClick={()=>{addCartlist(donut)}}
          >
          </div>
          <Link to={`/menulist/${donut.id}`}>
            <img src={donut.image} alt={donut.name} />
          </Link>
          <li>{donut.name}</li>
          <li>{donut.price}원</li>
        </div>
      ))}
      </div>
    </div>
  )}