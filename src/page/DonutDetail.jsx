import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import '../css/donutdetail.css'

export default function DonutDetail() {
  const { id } = useParams();
  const { state } = useContext(DataContext);
  const { donutList } = state;

  const donut = donutList.find((d) => d.id === parseInt(id));

  return (
    <div style={{paddingTop:"100px"}}>
      <div className='div-wrap2'>
        <img src={donut.image} alt={donut.name} />
        <h2>{donut.name}</h2>
        <p>{donut.detail}</p>
        <p>{donut.price}</p>
      </div>
    </div>
  );
}